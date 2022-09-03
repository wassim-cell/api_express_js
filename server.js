const express = require("express")

const app = express()
const Route = require("./rootes/my_roote.roote")
const flash = require('connect-flash')

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use(flash())
app.use('/',Route)










app.listen(8000,()=>console.log("server run on 4700"))