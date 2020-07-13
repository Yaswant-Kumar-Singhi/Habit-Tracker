
const Habit = require('../models/habit')



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

    
