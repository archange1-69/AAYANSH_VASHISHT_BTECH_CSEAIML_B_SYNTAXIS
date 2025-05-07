const mongoose = require('mongoose');
const { userSchema } = require('@syntaxis/data-schemas');

const User = mongoose.model('User', userSchema);

module.exports = User;
