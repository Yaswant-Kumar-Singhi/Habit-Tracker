# Habit-Tracker
>Habit tracking provides visual proof of your hard work—a subtle reminder of how far you've come so that you can proceed without breaking your streak.

![](https://img.shields.io/badge/version-1.0.1-orange) ![](https://img.shields.io/badge/dependencies-up%20to%20date-success) 
![](https://img.shields.io/badge/node--lts%40latest-10.15.0-brightgreen) ![](https://img.shields.io/badge/platform-win--32%20%7C%20win--64-lightgrey)
![](https://img.shields.io/badge/website-offline-lightgrey)

For video explanation <a href="https://youtu.be/yvAwzQ4dZdM">click me!</a> or you can go to https://youtu.be/yvAwzQ4dZdM
```
Demo
```
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/working%20gif.gif)



### Features
- [x] Signup users with unique emailID
- [x] Client side verification of emailID
- [x] Sign In using verified emailID
- [x] Create a habit.
- [x] Delete a habit.

### Added Features
- [x] Day of week view. (Calender View)

### Technology Stack Used

Particulars | Version
----------- | ---------
connect-mongo | 3.2.0
cookie-parser	| 1.4.5
ejs	| 3.1.3
express	| 4.17.1
express-ejs-layouts	| 2.5.0
express-session	| 1.17.1
mongoose	| 5.9.19
nodejs | 10.15.0
node-sass-middleware	| 0.11.0
passport	| 0.4.1
passport-local	| 1.0.0



#### How To Strat my Application?

* Install dependencies for my project to start
```
npm install

```
* Run MongoDb Server Locally by using connection string
```
mongodb://localhost/db

```
* Strat by using below command
```
npm strat 
 
```

### Home Page
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/HomePage.JPG)


### SignUp Page
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/SignUpForm.JPG)


### Sign In Page
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/SignInForm.JPG)


### User Profile Page
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/UserProfile.JPG)


### Adding a Habit
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/AddingHabbitViewUser.JPG)


### calender view
![](https://github.com/Yaswant-Kumar-Singhi/Habit-Tracker/blob/master/assets/screenshort/Capture.JPG)


### Description of Routes

`users/sign-up      :` Creting a user. <br>
`users/sign-in      :` Login a user. <br>
`users/profile      :` Going to user profile.<br>
`users/habit/create :` Creating a habit.<br>
`users/habit/delete :` Delete a habit.<br>
`users/viewAll      :` View habit in day of week of a particular user.<br>


 #### File directory structure.
```
$ tree
.
├── assets
│   ├── css
|     ├── footer.css
│     ├── header.css
|     ├── home.css
|     ├── layout.css
|     ├── list.css
│     ├── user_profile.css
|     ├── user_sign_in.css
|     └── user_sign_up.css
│   ├── js
|   └── scss
|    ├── footer.scss
│    ├── header.scss
|    ├── home.scss
|    ├── layout.scss
|    ├── list.scss
│    ├── user_profile.scss
|    ├── user_sign_in.scss
|    └── user_sign_up.scss
├── config
│   ├── mongoose.js
│   └── passport-local-strategy.js
├── controllers
│   ├── habit_controller.js
│   ├── home_controller.js
|   └── user_controller.js
├── models
│   ├── habit.js
│   └── user.js
├── routes
│   ├── habit.js
│   ├── index.js
|   └── users.js
├── views
│   ├── _footer.ejs
│   ├── _header.ejs
|   ├── home.ejs
|   ├── layout.ejs
|   ├── list.ejs
│   ├── user_profile.ejs
|   ├── user_sign_in.ejs
|   └── user_sign_up.ejs
├── index.js
├── package.json
├── package-lock.json
├── node_modules
└── README.md
```
 
# :eyes: End of my ReadME. Follow me if you like it!!!

 
