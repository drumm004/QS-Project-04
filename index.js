import express from 'express';
//import users from './routes/users.js';
//import products from './routes/products.js';
import cors from 'cors';

const app = express();
app.use(cors({ origin:true, credentials: true}));
app.use(express.json());
app.set('view engine', 'ejs');
//app.use('/users', users)
//app.use('/products', products)


app.get('/',(req,res)=>{
    res.send("Connected Successfully");
})

app.listen(5000,()=>{
    console.log("Server listening at http://localhost:5000")
})