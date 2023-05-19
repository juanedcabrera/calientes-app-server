// require ODM
const mongoose = require('mongoose');

// schema
const episodeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    season: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Season',
      required: true,
    },
    episodeNumber: { type: Number, required: true },
    airDate: { type: String, required: true },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Guest',
        required: true,
      },
    ],
    sauces: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Sauce',
          required: true,
        },
      ],
    likes: { type: Number, required: true },
    carefulCount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// module.exports
module.exports = mongoose.model('Episode', episodeSchema);