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

exports.Entry = Entry;
exports.entrySchema = entrySchema;

