// require ODM
const mongoose = require('mongoose');

// schema
const guestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    episodes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true,
      },
    ],
    totalWingsEaten: { type: Number, required: true },
    wallOfFlame: { type: Boolean, required: true },
    wallOfShame: { type: Boolean, required: true },
    likes: { type: Number, required: true },
    img: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

// module.exports
module.exports = mongoose.model('Guest', guestSchema);
