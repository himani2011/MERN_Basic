const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
require('./db/conn');

//const cors=require('cors');

dotenv.config({path:'./config.env'});

const app=express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use(require('./router/auth'));
//app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});










//const User=require('./model/userSchema');


//Middleware example
// const middleware = (req,res,next) => {
//     console.log(`From Missleware`);
//     next();
// }

// //following won't be called though; only the auth.js will be called 
// app.get('/',(req,res)=>{
//     res.send(`Hello world!`);
// });