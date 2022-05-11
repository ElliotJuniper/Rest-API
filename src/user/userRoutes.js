const { Router } = require("express");
const { hashPass } = require("../middleware");


const { addUser, listUsers, deleteUser, updateUser } = require("./userController");

const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", hashPass, listUsers);
userRouter.delete("/user", hashPass, deleteUser);
userRouter.put("/user", hashPass, updateUser);

module.exports = userRouter;

