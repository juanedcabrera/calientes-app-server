// require ODM
const mongoose = require('mongoose');

// schema
const seasonSchema = new mongoose.Schema(
  {
    seasonNumber: { type: Number, required: true, unique: true },
    episodeIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true,
      },
    ],
    episodeTitles: [{ type: String, required: true }],
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
