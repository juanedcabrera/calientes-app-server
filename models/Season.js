// require ODM
const mongoose = require('mongoose');

// schema
const seasonSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true },
    episodes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true,
      },
    ],
    likes: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

// module.exports
module.exports = mongoose.model('Season', seasonSchema);
