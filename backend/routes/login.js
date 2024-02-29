const express = require('express');
const login = express.Router();

login.post('/login',async(req,res)=>{
    
    try{
        const body = await req.body;
        console.log(body);
       res.json({success : true, Message :"data received successfully"})
    }catch(err){
        res.json.status(500);
    }
   
});


module.exports = login;