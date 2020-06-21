const User = require('../models/user');

module.exports.profile = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('user_profile',{
                    title : "User Profile",
                    user : user
                })

            }
            return res.redirect('/users/sign-in');
        })

    }else{
        return res.redirect('/users/sign-in');
    }
}


module.exports.signUp = function(req,res){
   
        return res.render('user_sign_up',{
            title:"Sign Up"
        })
    }


    
module.exports.signIn = function(req,res){
   
    return res.render('user_sign_in',{
        title:"Sign In"
    })
}


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmpassword){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err) {console.log("eror in finding the user in signup"); return; }

        if(!user){
            User.create(req.body,function(err,user){
                if(err) {console.log("eror in creating user in signup"); return; } 

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('/users/sign-up');
        }
    })
    
}



module.exports.createSession = function(req,res){
    return res.redirect('/');
}