import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:5000/QS-Project-04/auth/login", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login  }}>
            {children}
        </AuthContext.Provider>
    );
};
