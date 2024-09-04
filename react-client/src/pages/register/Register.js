import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });
    const [err, setErr] = useState(null);

    const handelChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        

        try {
            await axios.post("http://localhost:5000/QS-Project-04/auth/register/", inputs);
            window.location.replace("/login");
        }catch(axiosErr) {
            setErr(err.responce.data);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Welcome</h1>
                    <p>
                        Bringing all levels of jewelers and crafters together for the purposes of increasing 
                        authenticity, craftsmanship, and overall value in the jewelry industry from the newest 
                        Do-it-yourself to the seasoned profesional.
                        <a href="https://www.freepik.com/free-photo/shiny-elegant-gold-chain-display_38652680.htm#fromView=search&page=3&position=15&uuid=ae23a5f4-fbc1-45ed-85a0-9894f3f091da">Image by freepik</a>
                    <br></br>
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input 
                            type="text" 
                            placeholder="User Name" 
                            name="username" 
                            onChange={handelChange}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={handelChange}
                        />
                         <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            onChange={handelChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            onChange={handelChange}
                        />
                        {err && err}
                        <button onClick={handleClick} type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;