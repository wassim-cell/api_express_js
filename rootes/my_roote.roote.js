const route=require("express").Router()
const Model =require("../models/my_model.model")



route.post("/findUser",(req,res,next)=>{
    Model.findUserData(req.body.id).then(user=>{
        if (user) {
          res.json(user)
        } else { res.json("User Not Found") }
    }).catch(err=>{
        console.log(err)
    })
})











module.exports=route