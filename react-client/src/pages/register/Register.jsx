import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    })

    const [err, setErr] = useState(null)

    const handelChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async (e) => {
        e.preventDefault();
        

        try {
            await axios.post("http://localhost:5000/QS-Project-04/pages/register/Register", inputs);
            window.location.replace("/login");
        }catch(axiosErr) {
            setErr(err.responce.date);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hello</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam 
                        sunt optio ex odit ipsam! Eos reiciendis eaque mollitia velit in deserunt 
                        odit facere quasi?
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
                            name="userName" 
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