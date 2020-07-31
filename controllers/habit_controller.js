//requiring local files
const Habit = require('../models/habit')


//creating a habit of a user
module.exports.create = function(req,res){
    Habit.create({
        habit : req.body.habit,
        day : req.body.day,
        frequency : req.body.frequency,
        user : req.user._id
    },function(err,Habit){
        if(err){
        console.log('err in creating a post'); return ;
        }
        //console.log(Post)
        return res.redirect('back');
       
    })

}


module.exports.delete = function(req,res){
    Habit.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("Error in delting the task");
            return ;
        }
        return res.redirect('back');
    });
};

    
