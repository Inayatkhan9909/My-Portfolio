const mongoose = require("mongoose");

const Contact = mongoose.model("Contact",{
    name:String,
    email:{type:String,require:true},
    message:{type:String,require:true}

});

module.exports = Contact;