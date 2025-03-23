const express = require("express")
const app = express()

app.get("/", (req, res)=>{
  res.send("WELCOME TO KGEC")
})

app.listen(5000, ()=>{
  console.log("SERVER IS RUNNING")
})
