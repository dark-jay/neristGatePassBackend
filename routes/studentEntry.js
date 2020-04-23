const {Student: Student, Entry, validate} = require('../models/student');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const students = await Student
    .find()
    .sort('rollNo')
    .select({ name: 1, rollNo: 1, entries: 1 });
  res.send(students);
});

router.post('/:rollNo', async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  const entry = new Entry({
    mode: req.body.mode
  });

  student.entries.push(entry);
  student.save();

  res.send(student);
});

router.get('/:rollNo', async (req, res) => {
  const student = await Student
    .findOne({ rollNo: req.params.rollNo })
    .select({ name: 1, rollNo: 1, entries: 1 });

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

module.exports = router;
