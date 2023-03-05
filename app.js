const bodyParser = require("body-parser");
const express  =  require("express");
var userRoute =  require('./controllers/user.controller');
/*
const Contact = require("./models/contact");
const User =  require('./models/user');
*/

require('./models/dbConfig');
const  app =  express();


app.use(bodyParser.json());

app.get("/",(req,res,next)=>{
    res.send("Hello Aviral");
})

app.get("/addUser",userRoute.addUser);

app.get('/users',userRoute.getAllUsers);

app.get('/user/:id',userRoute.getOneUser);

app.post('/newUser',userRoute.addNewUser);

app.delete('/users/:id',userRoute.removeUser);

/*
User.sync({force:true});
Contact.sync({force:true});
*/



app.listen(8080,()=>{
    console.log("Port running at 3000 http://localhost:8080");
})