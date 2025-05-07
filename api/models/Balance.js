const mongoose = require('mongoose');
const { balanceSchema } = require('@syntaxis/data-schemas');

module.exports = mongoose.model('Balance', balanceSchema);
