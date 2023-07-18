const express = require("express")
const bodyParser = require('body-parser');
const UserRouter = require("./routes/userRouter");
const NotesRouter = require("./routes/notesRouter");
require("./db/dnConn")
const app = express()

const port = 8080;
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World ")
})

app.use("/api",UserRouter)
app.use("/api",NotesRouter)

app.listen(port,()=>{
    console.log("Server is litensing..")
})