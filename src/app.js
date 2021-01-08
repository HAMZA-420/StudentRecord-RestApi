const express = require('express');
const app = express();
require('./db/connection');

const port = process.env.PORT || 8000;

app.get('/',(req,res)=> {
    res.send('Hello from the other side');
})

//create a new students
app.post('/students', (req,res)=> {
    res.send('Hello from other side');
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})