import { db } from "../../../connect.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res, next) => {

//CHECK USERS IF EXISTS

const q = "SELECT * FROM users WHERE username = ?";

db.query(q, [req.body.username], (err, data) => {
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("User already exists")

    //CREATE NEW USEER
        //Hash the password
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)";

        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.name
        ];

        db.query(q, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res, next) => {

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length ===0) return res.status(404).json("User not found");

        const checkPassword = bcryptjs.compareSync(req.body.password,data[0].password);

        if(!checkPassword) return res.status(400).json("Wrong Password or username");

        const token = jwt.sign({ userId: data[0].id }, "secretKey");

        const { password, ...others } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
        })
        .status(200)
        .json(others);
    });

};

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has been logged out")

}