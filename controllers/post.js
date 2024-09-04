import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) =>{
    const token = req.cookies.accessToken;;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err, userInfo) =>{
        if(err) return res.status(403).json("Token is not valid")

        const p = `SELECT p.*, u.id AS userId, name FROM posts AS p JOIN users AS u ON (u.id = p.userId)
        ORDER BY p.createdAt DESC
        `;

        db.query(p, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
};

export const addPost = (req, res) =>{
    const token = req.cookies.accessToken;;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err, userInfo) =>{
        if(err) return res.status(403).json("Token is not valid")

        const p = "INSERT INTO posts `desc`, `createdAt`, `userID`) VALUES (?)";

        const values = [
            req.body.desc, 
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id
        ]

        db.query(p, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post has be created successfully");
        });
    });
};