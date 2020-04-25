const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  mode: {
    type: String,
    required: true
  },
  gateNo: {
    type: Number,
    required: true,
    minlength: 1
  }
});

const Entry = mongoose.model('Entry', entrySchema);

const Staff = mongoose.model('Staff', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 12
  },
  entries: [entrySchema]
}));

function validateStaff(staff) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(10).max(12)
  });

  return schema.validate(staff);
}

function validateEntryPayload(entry) {
  const schema = Joi.object({
    date: Joi.date(),
    mode: Joi.string().valid('in', 'In', 'IN', 'out', 'Out', 'OUT').required(),
    gateNo: Joi.number().integer().min(1).max(3).required()
  });

  return schema.validate(entry);
}

exports.Staff = Staff; 
exports.Entry = Entry;
exports.validate = validateStaff;
exports.validateEntry = validateEntryPayload;