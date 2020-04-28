const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.set('useCreateIndex', true);
  mongoose.connect('mongodb://localhost/gatePassDB', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => winston.info('Connected to MongoDB...'));
}