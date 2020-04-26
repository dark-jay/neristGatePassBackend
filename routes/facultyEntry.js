const auth = require('../middleware/auth');
const {Faculty: Faculty, Entry, validateEntry} = require('../models/faculty');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const faculties = await Faculty
    .find()
    .sort('name')
    .select({ name: 1, phone: 1, entries: 1 });
  res.send(faculties);
});

router.post('/:phone', auth, async (req, res) => {
  const faculty = await Faculty.findOne({ phone: req.params.phone });
  if (!faculty) return res.status(404).send('The faculty member with the given ID was not found.');

  const { error } = validateEntry(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const entry = new Entry({
    date: req.body.date,
    mode: req.body.mode,
    gateNo: req.body.gateNo
  });

  faculty.entries.push(entry);
  faculty.save();

  res.send(faculty);
});

router.get('/:phone', async (req, res) => {
  const faculty = await Faculty
    .findOne({ phone: req.params.phone })
    .select({ name: 1, phone: 1, entries: 1 });

  if (!faculty) return res.status(404).send('The faculty member with the given ID was not found.');

  res.send(faculty);
});

module.exports = router;
