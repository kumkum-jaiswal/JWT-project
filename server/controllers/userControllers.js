const UserModel= require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSave=async(req, res)=>{
   const {name, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const User= await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword,
    })
    res.status(201).send({msg:"registration Successfull"});
}

const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const login = await UserModel.findOne({
        email: email
      });   
      if (!login) {
        res.status(404).json({
          message: "Email not found",
          status: "404 Not Found",
        });
        return;
      }
      const validPassword = await bcrypt.compare(
        password,
        login.password
      );
      if (!validPassword) {
        res.status(400).json({
          message: "Invalid password",
          status: "400 Bad Request",
        });
        return;
      }


       


}





module.exports={
    userSave,
    userLogin
}