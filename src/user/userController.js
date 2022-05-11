const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ user: newUser.username })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message});
    }
};

exports.listUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).send({ user });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deletingUser = await User.deleteOne(req.body);
        res.status(200).send({ user: deletingUser })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updatingUser = await User.updateOne(
            { email: req.body.email},
            { $set: { username: req.body.username }});
        res.status(200).send({ user: updatingUser })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message })
    }
}