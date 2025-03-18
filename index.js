const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
dotenv.config();
const app = express();
app.use(express.json());
const PORT= process.env.PORT;

//routes
app.use("/api",userRoutes);

//start server
app.listen(PORT,async()=>{
    await connectToDb();
    console.log(`Server is running on ${PORT}`);
});