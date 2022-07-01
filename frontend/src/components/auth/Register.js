import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import { StyledForm } from "./StyledForm";

const Register = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    // console.log(auth);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(user));
    };
    
    return (
        <StyledForm onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input 
                type="text" 
                placeholder="Name" 
                onChange={(e) => setUser({ ...user, name: e.target.value })} 
            />
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
                {auth.registerStatus === "pending" ? 
                    "Submitting": "Register"
                }
            </button>
            {auth.registerStatus === "rejected" ? 
                ( <p>{auth.registerError}</p> ) : null
            }
        </StyledForm>
    )
}

export default Register