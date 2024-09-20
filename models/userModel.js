
const mongoose = require('mongoose'); //importing mongoose here

// defining Schema for the project
const subscriberSchema = new mongoose.Schema({
    name: {
          type: String,
          required: true,
          },
    subscribedChannel: {
        type: String,
        required: true,
      },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model('Subscribers',subscriberSchema); 
// Exporting schema ... 