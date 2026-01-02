const express = require('express');
const router = express.Router();

// ✅ Add your student details here
let students = [
    { id: 1, name: "Praveen Kumar", age: 20, roll: "PK101", department: "ECE" },
    { id: 2, name: "Ramesh Singh", age: 21, roll: "RS102", department: "CSE" },
    { id: 3, name: "Aisha Patel", age: 19, roll: "AP103", department: "IT" }
];

// GET all students
router.get('/', (req, res) => {
    res.json(students);
});

// Add new student
router.post('/', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({
        message: "Student added successfully!",
        students
    });
});

module.exports = router;
