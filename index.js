import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
});
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", }));
app.use(cookieParser());
app.set("view engine", "ejs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });


app.use("/QS-Project-04/auth", authRoutes);
app.use("/QS-Project-04/users", userRoutes);
app.use("/QS-Project-04/posts", postRoutes);
app.use("/QS-Project-04/comments", commentRoutes);

app.listen(5000, ()=>{
    console.log("It is working!")
});
