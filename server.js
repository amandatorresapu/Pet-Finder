const express = require("express"); // import express so we can use express features
const cors = require("cors"); // import cors- corss origin resourse sharing
const app = express(); // create our app variable which is an instance of express
const port = 8000;
 
//Need to have these 2 lines before routes
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({extended:true})); // lets our app parse form information
app.use(cors()) // enable cors so that we can share resrouces back and forth between the backend and front end
 
 
 
require("./server/config/mongoose.config");
require("./server/routes/redbelt.routes")(app);
 
 
//this line needs to be at the bottom of the file
app.listen(port, ()=>console.log(`listening on port${port}`));