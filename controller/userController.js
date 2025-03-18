const User = require("../model/User");

// create a user
const createUser = async(req,res)=>{
    try{
const {name, email, age}= req.body;
if(!name || !email ||!age){
    return  res.status(400).json({msg:"All fields are required"});

}
const user = await User.create({name,email,age});
res.status(201).json({msg:"User created successfully", user});
    }catch(error){
        res.status(500).json({msg:"Error in creating user", error});

    }
};

module.exports = createUser;