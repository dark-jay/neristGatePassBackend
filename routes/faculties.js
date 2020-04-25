const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Faculty: Faculty, validate} = require('../models/faculty'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const faculties = await Faculty
    .find()
    .sort('name')
    .select({ name: 1, phone: 1 });
  res.send(faculties);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let faculty = new Faculty({ 
    name: req.body.name,
    phone: req.body.phone,
    entries: []
  });
  faculty = await faculty.save();
  
  res.send(faculty);
});

router.put('/:phone', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const faculty = await Faculty.findOne({ 
    phone: req.params.phone
  });

  if (!faculty) return res.status(404).send('The student with the given ID was not found.');

  faculty.name = req.body.name;
  faculty.phone = req.body.phone;
  
  res.send(faculty);
});

router.delete('/:phone', [auth, admin], async (req, res) => {
  const faculty = await Faculty.deleteOne({ phone: req.params.phone });

  if (!faculty) return res.status(404).send('The Faculty with the given ID was not found.');

  res.send(faculty);
});

router.get('/:phone', async (req, res) => {
  const faculty = await Faculty
    .findOne({ phone: req.params.phone })
    .select({ name: 1, phone: 1 });

  if (!faculty) return res.status(404).send('The Faculty with the given ID was not found.');

  res.send(faculty);
});

module.exports = router; 