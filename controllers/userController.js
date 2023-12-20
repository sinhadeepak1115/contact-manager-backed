const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Register a user 
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req,res)=>{
    const {username, email, password} = req.body;
  if(!username || !email || !password){
    res.status(400);
    throw new Error("All Fields are mandatory.")
  }
  const userAvailable = await User.findOne({email});
  if (userAvailable){
    res.status(400);
    throw new Error("User already registered!")
  }
  //Hash Password
  const hashedPassword = await bcrypt.hash(password,10);
  console.log("Hashed Password: ", hashedPassword);
  const user =  await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("User Created", user);
  if (user){
    res.status(201).json({_id:user.id, email: user.email});
  }else{
    res.status(400);
    throw new Error("User data us not valid");
  }
  res.json({ message: "Register the user"});
});

//@desc Login user 
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req,res)=>{
    res.json({ message: "Login user"});
});

//@desc current user 
//@route POST /api/users/current
//@access private

const currentUser = asyncHandler(async (req,res)=>{
    res.json({ message: "Current user"});
});
module.exports = {
    registerUser,
    loginUser,
    currentUser
}