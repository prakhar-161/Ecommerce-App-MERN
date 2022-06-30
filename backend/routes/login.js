const bcrypt = require('bcryptjs');
const Joi = require('joi');
const User = require('../models/user');
const generateAuthToken = require('../utils/authToken');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().max(200).required(),
        password: Joi.string().min(5).max(1024).required()
    });

    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    };

    let user = await User.findOne({ email: req.body.email });
    if(!user) {
        return res.status(400).send('Invalid email or password');
    };

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch) {
        return res.status(400).send('Invalid email or password');
    };

    const token = generateAuthToken(user);

    res.send(token);
});

module.exports = router;