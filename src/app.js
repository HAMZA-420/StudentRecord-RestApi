const express = require('express');
const app = express();
const Student = require('./models/students');
const studentRouter = require('./routers/student');
require('./db/connection');

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})