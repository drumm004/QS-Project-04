import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
/*import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/questions.js";
import answerRoutes from "./routes/answers.js";*/


//middleware
app.use(express.json());
app.use(cors({ origin:true, credentials: true}));
app.use(cookieParser());
app.set("view engine", "ejs");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "finalproject"
});

app.use("QS-Project-04/users", userRoutes)
app.use("QS-Project-04/questions", questionRoutes)
app.use("QS-Project-04/answers", answerRoutes)
app.use("QS-Project-04/auth", authRoutes)


/*app.get("/", (req,res)=>{
    res.json("Connected to the server Successfully");
});

app.get("/questions", (req,res)=>{
    const q = "SELECT * FROM questions"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.post("/questions", (req, res)=>{
    const q = "INSERT INTO questions (`title`, `desc`, `photo`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.photo
    ]

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Question has been created successfully")
    })
})*/



app.listen(5000, ()=>{
    console.log("Server listening now at http://localhost:5000")
})