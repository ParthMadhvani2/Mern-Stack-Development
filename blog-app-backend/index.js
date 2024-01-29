const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//route file import
const blog = require("./routes/blog");
//mount 
app.use("/api/v1", blog);

const connectWithDB = require("./config/database");
connectWithDB();

//Start the server
app.listen(PORT, () => {
    console.log("App is running");
})

app.get("/", (req,res) => {
    res.send(`<h1>This is HomePage</h1>`)
})