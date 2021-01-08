const express = require('express');
const app = express();
const Student = require('./models/students');

require('./db/connection');

const port = process.env.PORT || 8000;
app.use(express.json());

app.get('/',(req,res)=> {
    res.send('Hello from the other side');
})

//create a new students
app.post('/students', (req,res)=> {
    
    console.log(req.body);  //getting data from postman
    const user = new Student(req.body);
    user.save().then(()=> {   //saving to mongodb
        res.status(201).send(user);
    }).catch((e)=> {
        res.status(400).send(e);
    }); 
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})