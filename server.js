const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res)=>{
    res.send("Welcome to music app");
})
app.listen(port, "0.0.0.0", ()=>{
    console.log("server running on port" + port )
})