const bodyParser = require("body-parser")
const express = require("express")
const MongoClient = require('mongodb').MongoClient

const app = express()
const uri = "mongodb+srv://Admin:admin@cluster0.1f8sdcy.mongodb.net/?retryWrites=true&w=majority"


MongoClient.connect(uri, 
    function(err,client) {
        if(err)
            return console.log(err)
        db = client.db("Banquin")
        
        app.listen(3000, 
            function() {
                console.log("SUCESS")
            })
    })

app.use(bodyParser.urlencoded({extended:true}))

// GET -> READ
app.set("view engine", "ejs")

app.get("/", 
    function(req,res){
        res.render("index.ejs")
    })

// POST -> CREATE
app.post("/registrar",
    function(req,res) {
        db.collection("data").insertOne(req.body, 
            function(err, result) {
                if(err)
                    console.log(err)
                console.log("salvou")
                res.redirect("/")
            })
    })
// PUT -> UPTDATE
// DELETE -> DELETE