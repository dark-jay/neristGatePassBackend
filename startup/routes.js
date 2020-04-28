const express = require('express');
const students = require('../routes/students');
const faculties = require('../routes/faculties');
const staffs = require('../routes/staffs');
const studentEntry = require('../routes/studentEntry');
const facultyEntry = require('../routes/facultyEntry');
const staffEntry = require('../routes/staffEntry');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/students', students);
  app.use('/api/faculties', faculties);
  app.use('/api/staffs', staffs);
  app.use('/api/studententry', studentEntry);
  app.use('/api/facultyentry', facultyEntry);
  app.use('/api/staffentry', staffEntry);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(error);
}