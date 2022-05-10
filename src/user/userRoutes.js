const { Router } = require("express");
const { hashPass } = require("../middleware");


const { addUser } = require("./userController");

const userRouter = Router();

userRouter.post("/user", hashPass, addUser);

module.exports = userRouter;