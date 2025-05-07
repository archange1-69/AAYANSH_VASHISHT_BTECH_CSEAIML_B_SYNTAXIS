const mongoose = require('mongoose');
const { keySchema } = require('@syntaxis/data-schemas');

module.exports = mongoose.model('Key', keySchema);
