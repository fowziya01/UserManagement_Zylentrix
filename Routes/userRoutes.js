const express = require("express");
const {createUser,getUsers,getUserById,updateUser,deleteUser} = require("../controller/userController");
const router = express.Router();


router.post("/create",createUser);
router.get("/users",getUsers);
router.get("/users/:id",getUserById);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);


module.exports = router;