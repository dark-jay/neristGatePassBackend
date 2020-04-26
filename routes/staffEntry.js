const auth = require('../middleware/auth');
const {Staff: Staff, Entry, validateEntry} = require('../models/staff');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const staffs = await Staff
    .find()
    .sort('name')
    .select({ name: 1, phone: 1, entries: 1 });
  res.send(staffs);
});

router.post('/:phone', auth, async (req, res) => {
  const staff = await Staff.findOne({ phone: req.params.phone });
  if (!staff) return res.status(404).send('The staff member with the given ID was not found.');

  const { error } = validateEntry(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const entry = new Entry({
    date: req.body.date,
    mode: req.body.mode,
    gateNo: req.body.gateNo
  });

  staff.entries.push(entry);
  staff.save();

  res.send(staff);
});

router.get('/:phone', async (req, res) => {
  const staff = await Staff
    .findOne({ phone: req.params.phone })
    .select({ name: 1, phone: 1, entries: 1 });

  if (!staff) return res.status(404).send('The staff member with the given ID was not found.');

  res.send(staff);
});

module.exports = router;
