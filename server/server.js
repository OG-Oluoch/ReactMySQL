import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password:"",
    database:"crud"
})

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM students";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message:"Error in the server"});
         return res.json(result);
    })
})

app.listen(8080,()=>{
    console.log("listening");
})