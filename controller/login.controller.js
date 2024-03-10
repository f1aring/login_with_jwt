const model = require('../model/login.model');

exports.signInRequest = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const result = await model.signIn(username, password);
        res.status(200).json({result});
    } catch (error) {
        console.log(error)
    }
}

exports.signUpRequest = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const result = await model.signUp(username, password);
        res.status(200).json('signup successful');
    } catch (error) {
        console.log(error)
    }
}