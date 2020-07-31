//requiring mongoose
const mongoose = require('mongoose');

//creating a schema for habit
const habitSchema = new mongoose.Schema({
    habit : {
        type : String,
        required : true,
        unique : true
    },
    day : {
        type : String,
        required : true
    },
    frequency : {
        type : Number,
        required :true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
},{
    timestamps : true
});

//exporting schema
const habit = mongoose.model('habit',habitSchema);
module.exports = habit;