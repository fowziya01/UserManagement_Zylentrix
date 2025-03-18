const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const connectToDb= async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to db");
    }catch(err){
console.log("Error in connecting db");
    }
}
module.exports = connectToDb;