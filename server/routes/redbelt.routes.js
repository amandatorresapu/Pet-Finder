const RedbeltController = require("../controllers/redbelt.controller")
module.exports = (app)=>{
 
  
//routes here(app.get or post or put or delete)
app.get("/api/hello", RedbeltController.sayHello);
app.get("/api/redbelt", RedbeltController.findAll);
app.post("/api/redbelt", RedbeltController.createOne);
// //find random jokes
// app.get("/api/jokes/random", JokeController.findRandomJoke)
 
app.get("/api/redbelt/:_id", RedbeltController.findOne)
app.put("/api/redbelt/:_id", RedbeltController.updateOne)
app.delete("/api/redbelt/:_id", RedbeltController.deleteOne)

}