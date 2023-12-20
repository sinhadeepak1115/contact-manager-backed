const asyncHandler = require("express-async-handler");
//@desc Register a user 
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req,res)=>{
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