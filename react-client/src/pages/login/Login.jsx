import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin  = () => {
        login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome Back</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, quod.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={login}>
                        <input 
                            type="text" 
                            placeholder="User Name" 
                            name="userName" 
                            />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            />
                        <button onClick={handleLogin} type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;