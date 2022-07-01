import { StyledForm } from "./StyledForm"

const Login = () => {
    return (
        <StyledForm>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                // onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                // onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
        </StyledForm>
    )
}

export default Login;