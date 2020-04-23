const {Student: Student, validate} = require('../models/student');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const students = await Student
    .find()
    .sort('rollNo')
    .select({ name: 1, rollNo: 1, regNo: 1, phone: 1 });
  res.send(students);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let student = new Student({
    name: req.body.name,
    rollNo: req.body.rollNo,
    regNo: req.body.regNo,
    phone: req.body.phone,
    entries: []
  });
  student = await student.save();

  res.send(student);
});

router.put('/:rollNo', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findOne({
      rollNo: req.params.rollNo
  });

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  student.name = req.body.name;
  student.rollNo = req.body.rollNo;
  student.regNo = req.body.regNo;
  student.phone = req.body.phone;

  res.send(student);
});

router.delete('/:rollNo', async (req, res) => {
  const student = await Student.deleteOne({ rollNo: req.params.rollNo });

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

router.get('/:rollNo', async (req, res) => {
  const student = await Student
    .findOne({ rollNo: req.params.rollNo })
    .select({ name: 1, rollNo: 1, regNo: 1, phone: 1 });

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

module.exports = router;
