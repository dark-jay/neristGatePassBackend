const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Staff: Staff, validate} = require('../models/staff'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const staffs = await Staff
    .find()
    .sort('name')
    .select({ name: 1, phone: 1 });
  res.send(staffs);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let staff = new Staff({ 
    name: req.body.name,
    phone: req.body.phone,
    entries: []
  });
  staff = await staff.save();
  
  res.send(staff);
});

router.put('/:phone', [auth, admin], async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const staff = await Staff.findOne({ 
    phone: req.params.phone
  });

  if (!staff) return res.status(404).send('The staff member with the given ID was not found.');

  staff.name = req.body.name;
  staff.phone = req.body.phone;
  
  res.send(staff);
});

router.delete('/:phone', [auth, admin], async (req, res) => {
  const staff = await Staff.deleteOne({ phone: req.params.phone });

  if (!staff) return res.status(404).send('The staff member with the given ID was not found.');

  res.send(staff);
});

router.get('/:phone', async (req, res) => {
  const staff = await Staff
    .findOne({ phone: req.params.phone })
    .select({ name: 1, phone: 1 });

  if (!staff) return res.status(404).send('The staff members with the given ID was not found.');

  res.send(staff);
});

module.exports = router; 