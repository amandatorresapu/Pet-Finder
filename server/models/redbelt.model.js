const mongoose = require('mongoose');

// purpose of this file is to describe how our quotes table (collection s hould look)

//instructions for what the quotes table should look like below
const RedbeltSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 charasters"]
    },

    breed: {
        type: String,
        required: [true, "Must have a type/breed"],
        minlength: [3, "Name must be at least 3 charasters"]
    },

    description: {
        type: String,
        required: [true, "Must have a description"],
        minlength: [3, "Name must be at least 3 charasters"]
    },
    profilePicUrl: {
        type: String
    },
    //this is option becuase there is no required
    skill1: {
        type: String, 
    },
    skill2: {
        type: String,  
    },
    skill3: {
        type: String,
    }

   
   
  
},{timestamps: true});

const Redbelt = mongoose.model("Redbelt", RedbeltSchema );

module.exports = Redbelt;