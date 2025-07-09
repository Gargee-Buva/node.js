const express = require ('express');
const users = require("./MOCK_DATA.json");
const fs = require("fs") ;
const app = express(); 
const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({extended:false})) ;

//ROUTES will come here 

app.get("/api/users",(req,res) => { 
    return res.json(users);
});

app.get("/users",(req,res) => { 
    const html =`
    <ul>
    ${users.map(user =>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//REST API
app.get("/api/users/:id",(req,res) => {
const id = Number(req.params.id); //finding the id
const user = users.find((user)=>user.id===id); 
if(user){
        return res.json(user) ;
    }
    else{
        res.send("User not found") ;
    }
});

app.post("/api/users",(req,res) =>{
    //Create new user
const body = req.body ;
    console.log("Body",body) ;
    users.push({...body , id: users.length + 1}) ;
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success" , id:users.length});
    })
});

app.patch("/api/users/:id",(req,res)=>{
    //edit the user with id
    return res.json({ status:"pending"});
});

app.delete("/api/users/:id",(req,res)=>{
    //delete the user with id
    return res.json({ status:"pending"});
});


app.listen(PORT, () => console.log(`Server Started at PORT ${PORT} `))