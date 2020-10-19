const mongoose = require("mongoose");

const flixSchema = new mongoose.Schema(
  {
    title: String,
    thumbnailUrl: {
      type: String,
      default: "https://via.placeholder.com/150.jpg",
    },
    videoUrl: {
      type: String,
      default: "https://via.placeholder.com/500.jpg",
    },
    desc: {
      type: String,
      max: 100,
    },
    category: String,
    genre: [String],
    releaseDate: { type: Date, default: Date.now },
    imdb: Number,
    languages: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flix", flixSchema);
