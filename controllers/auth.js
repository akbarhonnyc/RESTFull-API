
const User = require('../models/user');
const CryptoJs = require('crypto-js');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

// @route POST  /api/auth/login
// @desc   login a user
// @access public
exports.postLogin = asyncHandler(async (req, res, next) => {
    const {username, password} = req.body
    const user = await User.findOne({username: username}).lean();
    if (!user) return res.status(401).json({error: 'Invalid Login Credentials'})
    
    const userPassword = CryptoJs.AES.decrypt(user.password, process.env.PASSWORD_SEC).toString(CryptoJs.enc.Utf8)
    if(userPassword !== password) return res.status(401).json({error: 'Invalid Login Credentials'});
    const token = jwt.sign({id: user._id}, process.env.JWT_SEC, {expiresIn: '3d'});
    res.status(200).json({...user, token})
});
// @route POST /api/auth/register
// @desc   register a user
// @access public

exports.postRegister = asyncHandler(async (req, res, next) => {
    const {password, email, username } = req.body;
    const newUser = new User({ 
        username, email, 
        password: CryptoJs.AES.encrypt(password, process.env.PASSWORD_SEC).toString()
    });
   const savedUser = await newUser.save()
   res.status(201).json({success: true, savedUser})
});