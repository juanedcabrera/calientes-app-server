// require ODM
const mongoose = require('mongoose');

// schema
const sauceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    scoville: { type: Number, required: true },
    img: { type: String, required: true },
    likes: { types: Number, required: true },
    episodes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// module.exports
module.exports = mongoose.model('Sauce', sauceSchema);
