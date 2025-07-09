//https://expressjs.com/en/guide/using-middleware.html
const express = require('express');
const app = express();
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const PORT = 8000;

// Middlewares
app.use((req,res,next) => {
    console.log("hello from middleware 1") ;
    // return res.json({msg : "Hello from middleware"}) ; use this if you want to directly send response from the middleware
    req.myUsername = "Gargee Buva" ;
    next() ;
})

app.use((req , res , next)=>{
    console.log("Hello from middleware 2") ;
    next() ; 
})

// real use case 
app.use((req , res , next)=>{  
    fs.appendFile("log.txt" , `\n ${Date.now()} : ${req.method} : ${req.path}` , (err , data)=>{
        next() ;
    }) ;
})

app.get("/users",(req , res)=>{
   return res.end("Hello from get function " + req.myUsername) ;
})

app.listen(PORT , ()=>{
    console.log(`Server started on PORT ${PORT}`);
})

// for postman - http://localhost:8000/users
//nodemon - no need to restart server (nodemon index.js)