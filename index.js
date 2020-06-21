const express = require('express');

const db = require('./config/mongoose');

const port = 8000;

const app = express();




//set up a view engine
app.set('view engine','ejs');
app.set('views','./views');


// use express router
app.use('/',require('./routes'));


//server is on
app.listen(port,function(err,data){
    if(err){
        console.log("Error in running the server on Listening ", err);
        return ;
    }
    console.log(`Succcussfully connected to ${port}`);
});

