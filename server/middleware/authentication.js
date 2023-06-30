const User=require('../model/userSchema');
const jwt=require('jsonwebtoken');

//Comes from the front end
//Middleware creationz
const requireAuth = async (req,res,next)=>{

    try{
        const {authorization} = req.headers;
        if(!authorization){
            return res.status(401).json({message:"Please login!!"});
        }
        const token=authorization;

        const {_id} = jwt.verify(token,process.env.SECRET_KEY);
        req.user = await User.findOne({_id});
        req.id = await User.findOne({_id}).select({_id});
        next();

    }catch(err){
        console.log(err);
        res.status(401).json({message:err});    }
}

module.exports = requireAuth;