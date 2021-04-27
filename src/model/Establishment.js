const { model, Schema } = require('mongoose');

const EstablishmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bio: { 
    type: String,
    required: true
  },
  blind: {
    type: Boolean,
    required: true
  },
  wheelchair: {
    type: Boolean,
    required: true
  },
  hearing: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('establishment', EstablishmentSchema);