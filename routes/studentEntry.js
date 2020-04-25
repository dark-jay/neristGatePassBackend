const auth = require('../middleware/auth');
const {Faculty: Student, Entry, validateEntry} = require('../models/student');
const Joi = require('@hapi/joi');
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

router.post('/:rollNo', auth, async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });
  if (!student) return res.status(404).send('The student with the given ID was not found.');

  const { error } = validateEntry(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const entry = new Entry({
    date: req.body.date,
    mode: req.body.mode,
    gateNo: req.body.gateNo
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
