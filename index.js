//requiring global files
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const saasMiddleware = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

//requiring local files
const db = require('./config/mongoose');
const passportLocal = require('./config/passport-local-strategy');

//define your port number
const port = 8000;

//use express as function
const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

//using saas middleware to convert scss files to css files 
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

//using express get static files
app.use(express.static('./assets'));



//set up a view engine
app.set('view engine','ejs');
app.set('views','./views');

//creating session
app.use(session({
    name : 'habbitTracker',
    //TODO change the secret in production mode
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store : new MongoStore(
        {
        
            mongooseConnection : mongoose.connection,
            autoRemove : 'disabled'

        }, function(err){
        console.log(err)
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


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

