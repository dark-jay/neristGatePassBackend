const Joi = require('joi');
const mongoose = require('mongoose');

// Schema for Entry registrer
const entrySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  mode: String
});

// model of entry Schema
const Entry = mongoose.model('Entry', entrySchema);

// Embedded document model of the Student
const Student = mongoose.model('Student', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50
  },
  rollNo: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 12
  },
  regNo: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 8
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 12
  },
  entries: [entrySchema]
}));

function validateStudent(student) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    rollNo: Joi.string().min(8).max(12).required(),
    regNo: Joi.string().min(6).max(8).required(),
    phone: Joi.string().min(10).max(12)
  };

  return Joi.validate(student, schema);
}

exports.Student = Student; 
exports.Entry = Entry;
exports.validate = validateStudent;