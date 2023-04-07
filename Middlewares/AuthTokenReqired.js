const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Auth = require("../models/User")

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log(authorization)

    // // authorization === Bearer ewfjwefjwef
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in, token not given" });
    }
    const token = authorization.replace("Bearer ", "");
    // console.log(token)
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in, token invalid" });
        }
        const { _id } = payload;
        Auth.findById(_id).then(userData => {
            req.auth = userData;
            next();
        })
    })
}