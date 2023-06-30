const express=require('express');
const router=express.Router();
require('../db/conn');
const User=require('../model/userSchema');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const requireAuth = require('../middleware/authentication');

//Creating token for login thing
const createToken= (_id) =>{
    //{_id} because need to convert it into string
    return jwt.sign({_id},process.env.SECRET_KEY);
}

//***********Using async await************

router.post('/signup', async (req,res)=>{

    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({message:"Please fill all the fields"});
    }

    try{
        const userExists=await User.findOne({email:email});

        if(userExists){
            return res.status(422).json({message:"User already exists!!"});
        }
        else if(password != cpassword)
        {
            return res.status(422).json({message:"Passwords do not match!!"});
        }
        else{
            const user = new User({name,email,phone,work,password,cpassword});
            const token=createToken(user._id);
            //console.log(token);
            await user.save();
            //this token will be sent to front end
            res.status(201).json({token});
        }
    }
    catch(err){
        console.log(err);
    }
    
    // console.log(req.body);
    // res.json({message:req.body});
    //res.send(`Hello world!`);
});

//Login

router.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email||!password){
            res.status(400).json({error:"Please fill all the details"});
        }
        const userLogin=await User.findOne({email:email});

        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);

            //const token=await userLogin.generateAuthToken();

            if(!isMatch){
                res.status(400).json({error:"Invalid credentials!"});
            }
            else
            {
                const token=createToken(userLogin._id);
                console.log(token);
                //This will send the token to frontend
                res.status(201).json({token});
            }
        }
        else{
            res.status(400).json({error:"Invalid credentials!"});
        }
        
    }catch(err){
        console.log(err);
    }
});


module.exports=router;

//***********Using promise************

// router.post('/register',(req,res)=>{

//     const {name,email,phone,work,password,cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({message:"Please fill all the fields"});
//     }

//     User.findOne({email:email})
//     .then((userExists)=>{
//         if(userExists){
//             return res.status(422).json({message:"User already exists!!"});
//         }
//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"User registered!!"});
//         }).catch((err)=>{
//             res.status(500).json({error:"Error!!"})});
//     }).catch(err=>{console.log(err);});

//     // console.log(req.body);
//     // res.json({message:req.body});
//     //res.send(`Hello world!`);
// });


//Example 
// router.get('/auth',requireAuth,(req,res)=>{
//     console.log("OKKKKK");
//     res.send("From res.send");
// });