import { StyledForm } from "./StyledForm";
import { loginUser } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if(auth._id) {
            navigate('/cart');
        }
    }, [auth._id, navigate]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(user));
    };

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button>
                {
                    auth.loginStatus === "pending" ?
                    "Submitting" : "Login"
                }
            </button>
            {auth.loginStatus === "rejected" ? ( 
                <p>{auth.loginError}</p> 
            ) : null }
        </StyledForm>
    )
}

export default Login;