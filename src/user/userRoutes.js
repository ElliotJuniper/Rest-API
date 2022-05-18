const { Router } = require("express");
const { hashPass } = require("../middleware");


const { addUser, listUsers, deleteUser, updateUser } = require("./userController");

const userRouter = Router();

userRouter.post("/users", hashPass, addUser);
userRouter.get("/users", hashPass, listUsers);
userRouter.delete("/users", hashPass, deleteUser);
userRouter.put("/users", hashPass, updateUser);

module.exports = userRouter;

