const express = require('express');

const db = require('./config/mongoose');

const port = 8000;

const app = express();



app.listen(port,function(err,data){
    if(err){
        console.log("Error in running the server on Listening ", err);
        return ;
    }
    console.log(`Succcussfully connected to ${port}`);
});