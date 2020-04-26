const Joi = require('@hapi/joi');
const { Entry, entrySchema } = require('./entry');
const mongoose = require('mongoose');

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
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    rollNo: Joi.string().min(8).max(12).required(),
    regNo: Joi.string().min(6).max(8).required(),
    phone: Joi.string().min(10).max(12)
  });

  return schema.validate(student);
}

function validateEntryPayload(entry) {
  const schema = Joi.object({
    date: Joi.date(),
    mode: Joi.string().valid('in', 'In', 'IN', 'out', 'Out', 'OUT').required(),
    gateNo: Joi.number().integer().min(1).max(3).required()
  });

  return schema.validate(entry);
}

exports.Student = Student; 
exports.Entry = Entry;
exports.validate = validateStudent;
exports.validateEntry = validateEntryPayload;