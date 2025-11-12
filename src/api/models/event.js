const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    location: { type: mongoose.Types.ObjectId, ref: 'locations' },
    attendees: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
    maxCapacity: { type: Number, min: 1 },
    currentAttendees: { type: Number, default: 0, min: 0 },
    eventImg: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    createdBy: [{ type: mongoose.Types.ObjectId, ref: 'users' }]
  },

  {
    timestamps: true,
    collection: 'events'
  }
)

const Event = mongoose.model('events', eventSchema, 'events')
module.exports = Event
