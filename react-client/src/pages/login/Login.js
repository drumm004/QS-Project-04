import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handelChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin  = async (e) => {
        e.preventDefault();
        try {
        await login(inputs);
        navigate("/");
        }catch(err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome Back</h1>
                    <p>
                        Bringing all levels of jewelers and crafters together for the purposes of increasing 
                        authenticity, craftsmanship, and overall value in the jewelry industry from the newest 
                        Do-it-yourself to the seasoned profesional.
                      <a href="https://www.freepik.com/free-photo/many-colorful-beads-plier-wooden-desk_4635908.htm#fromView=search&page=4&position=1&uuid=8b39d615-0ddf-4875-b9e2-d63bb1947aa9">Image by freepik</a>
                    <br></br>
                    </p>
                    <span>Don't have an account yet?</span>
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
                            onChange={handelChange} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            onChange={handelChange} 
                        />
                        {err && err}
                        <button onClick={handleLogin} type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;