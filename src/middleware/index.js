const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error : error.message})
    }
}

exports.login = async(req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username})
        if (await bcrypt.compare(req.body.password, user.password)) {
        res.status(200).send({message: "Successfully Logged In"});
        next();
    } else {
        res.status(500).send({
            message: "Login Unsuccessful "
        })
    }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}
