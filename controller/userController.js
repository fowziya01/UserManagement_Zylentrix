const mongoose = require("mongoose");
const User = require("../model/User");

//1. create a user
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
//2.Retrieve All Users – Returns a list of users. 
const getUsers = async(req,res)=>{
    try{
const users = await User.find();
res.status(200).json({msg:"All users list", users});

    }catch(error){
        res.status(500).json({msg:"Error in listing all users", error});

    }
};
//3. Retrieve a Single User – Fetches a user by ID. 
const getUserById = async(req,res)=>{
    try{
const user = await User.findById(req.params.id);
if(!user){
    return res.status(404).json({msg:"User not found"})
}
res.status(200).json(user);

    }catch(error){
        res.status(500).json({msg:"Error in fetching user by Id", error});

    }
};
//4. Update a User – Updates user details using an ID. 
const updateUser = async(req,res)=>{
    try{
        const {name, email, age}= req.body;
const updatedUser = await User.findByIdAndUpdate(req.params.id,{name,email,age},{new:true});
if(!updatedUser){
    return res.status(404).json({msg:"User not found"})
}
res.status(200).json({msg:"User updated",updatedUser});

    }catch(error){
        res.status(500).json({msg:"Error in updating user", error});

    }
};
//5. Delete a User – Removes a user from the database using an ID.
const deleteUser = async(req,res)=>{
    try{
const deletedUser = await User.findByIdAndDelete(req.params.id);
if(!deletedUser){
    return res.status(404).json({msg:"User not found"})
}
res.status(200).json({msg:"User deleted",deletedUser});

    }catch(error){
        res.status(500).json({msg:"Error in deleting user", error});

    }
};

module.exports = {createUser,getUsers,getUserById,updateUser,deleteUser};