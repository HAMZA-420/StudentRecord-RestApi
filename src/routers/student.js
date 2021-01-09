const express = require("express");
const Student = require('../models/students');
const router = new express.Router();


//create a new students with async await
router.post("/students", async(req,res)=> {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e) {
        res.status(400).send(e);
    }
})



router.get("/students",async(req,res)=> {
    try{
        const studentsData= await Student.find();
        res.send(studentsData);
    }catch(e) {
        res.send(e);
    }
} )

router.get("/students/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        
        if(!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
       
    }catch(e) {
        res.statusCode(500).send(e);
    }
})

//delete the students by id

router.delete('/students/:id', async(req,res) =>{
    try{
        const id=req.params.id;
        const deleteStudent= await Student.findByIdAndDelete(id)
        if(!req.params.id) {
            return res.statusCode(400).send();
        }
        res.send(deleteStudent);
    }catch(e) {
        res.statusCode(500).send(e);
    }
})



//update students by its id
router.patch("/students/:id",async(req,res) => {
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body, {
            new: true
        } );
        res.send(updateStudents);
    }catch(e) {
        res.statusCode(400).send(e);
    }
})



module.exports = router;