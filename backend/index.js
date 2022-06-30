require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const products = require('./products');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);

app.get('/', (req, res) => {
    res.send('Welcome to shopping cart!');
});

app.get('/products', (req,res) => {
    res.send(products);
});

const port = process.env.PORT || 5100;
const uri = process.env.MONGO_URI;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log("MongoDB connection failed", err.message));
