const express = require('express');
const expressLayout = require('express-ejs-layouts');
const saasMiddleware = require('node-sass-middleware');
const cookieParser = require('cookie-parser');



const db = require('./config/mongoose');


const port = 8000;

const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(saasMiddleware({
    src: './assets/scss',
    dest : './assets/css/',
    debug : true,
    outputStyle: 'extended',
    prefix : '/css'
}))

//all the views are to rener is from some layout
app.use(expressLayout);
app.use(express.urlencoded());


//extract style and script from sub pages
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );









app.use(express.static('./assets'));



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

