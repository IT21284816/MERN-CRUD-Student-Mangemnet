const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({
    nameS1:{
        type:String,
        required:true
    },
    regNoS1:{
        type:String,
        required:true
    },
    emailS1:{
        type:String,
        required:true
    },
    contactS1:{
        type:Number,
        required:true
    }
});
const students=new mongoose.model("students",studSchema);
module.exports=students;