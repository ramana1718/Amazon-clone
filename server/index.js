//console.log("hello,world");

const express = require('express');
const mongoose=require('mongoose');
const authRouter =require("./routes/auth");

const PORT =3000;
const app=express();
const DB="mongodb+srv://gokulramana:030406@cluster0.d203sag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(authRouter);

// app.get("/",(req,res)=>{
//     res.send("GOkul");
// });
// app.get("/hello-world",(req, res)=>{
//     res.json({hi:"hello world"});
// })
mongoose.connect(DB).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log(e);
})

app.listen(PORT,()=>{
    console.log(`connected at port ${PORT} `);

});


