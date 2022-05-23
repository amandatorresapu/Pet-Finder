const Redbelt = require("../models/redbelt.model");

module.exports.sayHello = (req, res)=>{
   res.json({msg: "wazzap mongoose quotes api24"})
}
//find all ___
module.exports.findAll = (req,res)=>{
   Redbelt.find()
       .then(allRedbelts=>res.json({results: allRedbelts}))
       .catch(err=>{res.json({msg:"something went wrong", error: err})
   })
}
//create 
module.exports.createOne = (req, res)=> {
   //req.body represent form information
   Redbelt.create(req.body)
   .then(newlyCreated=>{
       res.json({results: newlyCreated })
       })
   .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
//find one joke
module.exports.findOne = (req, res)=> {
   //req.body represent form information
   Redbelt.findOne({_id: req.params._id})
   .then(oneFind=>{
       res.json({results: oneFind })
       })
   .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
 
module.exports.updateOne = (req, res)=> {
   //
   Redbelt.findOneAndUpdate(
       {_id: req.params._id}, //specify which quote to update
        req.body, //specify the form informion to update the quote with
        { new: true, runValidators: true })
   .then(updateOne=>{
       res.json({results: updateOne })
       })
   .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
 
module.exports.deleteOne = (req, res)=> {
   //
   Redbelt.deleteOne({_id: req.params._id})
   .then(deleteOne=>{
       res.json({results: deleteOne })
       })
   .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
