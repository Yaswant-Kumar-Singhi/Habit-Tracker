const mongoose = require('mongoose');


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
        type : String,
        required :true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
},{
    timestamps : true
});

const habit = mongoose.model('habit',habitSchema);
module.exports = habit;