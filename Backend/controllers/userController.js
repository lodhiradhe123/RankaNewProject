var express = require('express');
var router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt")


exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).send('User already exists')
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
            res.status(200).send("user created successfully")

        }


    } catch (error) {
        res.send(error.message)
    }
}

exports.loginUser = async (req, res, next) => {
    if (req.body.email && req.body.password) {
        try {
            const user = await User.findOne({ email: req.body.email })

            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch || !user) {
                return res.status(400).send("Invalid email or password")
            } else {
                res.status(200).send({ meassage: "User logged_in successfully", user: user });
            }


        } catch (err) {
            res.send(err.message)
        }
    } else {
        res.status(400).send("Invalid email or password")
    }
}