const userModal = require('../modal/user');
<<<<<<< HEAD
require('dotenv').config()
const {comparePassword, hashPassword} = require('../helper/auth')
const jwt = require('jsonwebtoken')
=======

>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
const test = (req, res) => {
  res.status(200).json("test successful");
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "Please provide name",
      });
    }

    if (!password) {
      return res.json({
        error: "Please provide password",
      });
    }

    // Use await or .then() to handle the asynchronous operation
    const exist = await userModal.findOne({ email });

    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

<<<<<<< HEAD
    const newPassword = await hashPassword(password)

    const user = await userModal.create({
      name,
      email,
      password:newPassword,
=======
    const user = await userModal.create({
      name,
      email,
      password,
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

<<<<<<< HEAD
const login = async (req,res) => {
  try {
    const {email,password} = req.body
    const user = await userModal.findOne({email})
    if(!user){
      return res.json({
        error:"No user found"
      })
    }
    const match = await comparePassword(password,user.password)
    if(match){
      jwt.sign({email:user.email,id:user._id,name:user.name},process.env.JWT_SECRET,{},(err,token) => {
        if(err){
          throw err
        }
        res.cookie('token',token).json(user)
      })
    }
    else{
      return res.json({
        error:"Incorrect Password"
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const profile = (req,res) => {
  const { token} = req.cookies || {};
  console.log(req.cookies)
  if(token){
    jwt.verify(token,process.env.JWT_SECRET,{},(err,user) => {
      if(err){
        throw err;
      }
      res.json(user)
    })
  }
  else{
    res.json(null)
  }
}

module.exports = { test, register,login,profile };
=======
module.exports = { test, register };
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
