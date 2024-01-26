// Step 1: Create a folder
// Step 2: move into that folder
// Step 3: npm init -y
// Step 4: npm i express
// Step 5: create server.js
// Step 5: node server.js       (to run in terminal)


// Server Instantiate
const express = require('express');
const app = express();

// used to parse req.body in express -> PUT or POST 
const bodyParser = require('body-parser');
// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// Activate the server on 3000 port
app.listen(3000, () =>{
    console.log("Your server has started at port no. 3000")
});

// Routes
app.get('/',(request,response) => {
    response.send("Hello jee, kese ho saare");
})

app.get('/home',(request,response) => {
    response.send("Hello jee, you are in home page");
})

app.post('api/cars',(request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submited successfully.");
})

// connect mongoDB with nodejs using mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successfull")})
.catch((error) => {console.log("Recieved error")});