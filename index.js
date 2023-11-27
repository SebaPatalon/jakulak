const { render } = require('ejs');
const express = require('express')
const path=require("path")
const viewpath=path.join(__dirname + '/view');



const app = express()
app.set("view engine","ejs")
app.set("views",viewpath)
appPort = 3000
app.get('/',function(req, res){
    res.render("main.ejs")
})
app.get('/cos',function(req, res){
    res.render("second.ejs")
})
app.send("")
app.listen(appPort)

