// require ODM
const mongoose = require('mongoose');

// schema
const seasonSchema = new mongoose.Schema(
  {
    seasonNumber: { type: Number, required: true, unique: true },
    episodes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true,
      },
    ],
    likes: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// module.exports
module.exports = mongoose.model('Season', seasonSchema);
