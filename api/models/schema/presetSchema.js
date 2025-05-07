const mongoose = require('mongoose');
const { presetSchema } = require('@syntaxis/data-schemas');

const Preset = mongoose.models.Preset || mongoose.model('Preset', presetSchema);

module.exports = Preset;
