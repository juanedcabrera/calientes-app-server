// require ODM
const mongoose = require('mongoose');

// schema
const episodeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    seasonId: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Season',
      required: true,
    },
    seasonNumber: {
      type: Number,
    },
    overallEpisodeNumber: { type: Number, required: true, unique: true },
    seasonEpisodeNumber: { type: Number, required: true },
    airDate: { type: Date, required: true },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Guest',
      },
    ],
    sauces: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sauce',
        required: true,
      },
    ],
    success: { type: Boolean, required: true },
    guestDab: { type: Boolean, required: true },
    likes: { type: Number, required: true },
    carefulCount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// module.exports
module.exports = mongoose.model('Episode', episodeSchema);
