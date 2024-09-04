import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import mysql from "mysql2";

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
});
app.use(express.json());
app.use(cors({ origin: "https://localhost:3000", }));
app.use(cookieParser());
app.set("view engine", "ejs");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "finalproject"
});

app.use("/QS-Project-04/auth", authRoutes);
app.use("/QS-Project-04/users", userRoutes);
app.use("/QS-Project-04/posts", postRoutes);
app.use("/QS-Project-04/comments", commentRoutes);

app.listen(5000, ()=>{
    console.log("Server listening now at http://localhost:5000")
});
