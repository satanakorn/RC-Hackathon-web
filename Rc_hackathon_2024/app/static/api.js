const express = require("express");
const app = express()
const bodyP = require("body-parser");
const compiler = require("compilex");
const options = { stats: true}
compiler.init(options)

app.use(bodyP.json())
app.use("./pages/quiz/codemirror-5.65.16" , express.static("./pages/quiz/codemirror-5.65.16"))
app.get("/", function (req, res) {
    res.sendFile("D:/programming/Website Programming/RC Hackathon/index.html")
})
app.get('/style.css', function(req,res) {
    res.sendFile(__dirname + "/" + "style.css");
})

app.post("/compile" , function(req,res) {
    let code = req.body.code
    let input = req.body.input
    let lang = req.body.lang

    try {

        // Python Compiler
        if (!input) {
            var envData = { OS : "windows"};
            compiler.compilePython( envData , code , function(data) {
                res.send(data);
            })
            
        }
        else {
            var envData = { OS : "windows"};
            compiler.compilePython( envData , code , input , function(data) {
                res.send(data);
            })
        }
        
        
    }
    catch(e){
        console.log("error")
    }

    compiler.compilePython( envData , code , function(data) {
        res.send(data);
    })
})

app.listen(8000)