const express = require('express');
const signup = express.Router();

signup.post('/signup',async(req,res)=>{

    try{

        const body = await req.body;
        console.log(body);

    }catch(err){
        res.json.status({success : false, Message : "error occured"})
    }
   
});

module.exports = signup;