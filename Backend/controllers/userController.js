var express = require('express');
var router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt")


exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).send({ message: 'User already exists' })
        } else {
            const userCreate = await User(
                {
                    name,
                    email,
                    password: await bcrypt.hash(password, 10)
                }
            )
            await userCreate.save();
            console.log("User register successfully");
            res.status(200).send({ message: "user created successfully", user: userCreate })

        }
    } catch (error) {
        console.log(error);
    }
}

exports.loginUser = async (req, res, next) => {

    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        // console.log(user === null);
        if (!(user === null)) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).send({ message: "Invalid email or password" })
            } else {
                res.status(200).send({ meassage: "User logged_in successfully", user: user });
            }

        } else {
            res.status(404).send({ message: "Invalid email or password" })
        }

    } catch (err) {
        res.send(err.message)
    }

}