const config = require('config');
const mongoose = require('mongoose');
const students = require('./routes/students');
const faculties = require('./routes/faculties');
const staffs = require('./routes/staffs');
const studentEntry = require('./routes/studentEntry');
const facultyEntry = require('./routes/facultyEntry');
const staffEntry = require('./routes/staffEntry');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

mongoose.connect('mongodb://localhost/gatePassDB')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/students', students);
app.use('/api/faculties', faculties);
app.use('/api/staffs', staffs);
app.use('/api/studententry', studentEntry);
app.use('/api/facultyentry', facultyEntry);
app.use('/api/staffentry', staffEntry);
app.use('/api/users', users);
app.use('/api/auth', auth);
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));