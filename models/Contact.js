const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{ timestamps: true });

const Contact = mongoose.model("Contact",contactSchema)

module.exports =Contact