const { validationResult } = require("express-validator");
const FlixModel = require("../models/flixModel");

const flix = [];

exports.getAllFlix = (req, res, next) => {
  FlixModel.find()
    .then((data) => {
      // console.log("getFlix", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("Error in fetching flix", err);
    });
};

exports.getFlix = (req, res, next) => {
  const flixId = req.params.flixId;
  FlixModel.findById(flixId)
    .then((flix) => {
      if (!flix) {
        console.log("Flix not found with Id", flixId);
        res.status(404).json({
          message: "Flix not found with Id" + flixId,
        });
      }
      console.log("Retrieved flix", flix);
      res.status(200).json(flix);
    })
    .catch((err) => {
      console.log("Error in finding flix", err);
    });
};

exports.addFlix = (req, res, next) => {
  let flix = new FlixModel({
    title: req.body.title,
    thumbnailUrl: req.body.thumbnailUrl,
    videoUrl: req.body.videoUrl,
    desc: req.body.desc,
    category: req.body.category,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    imdb: req.body.imdb,
    languages: req.body.languages,
  });
  flix
    .save()
    .then((flix) => {
      console.log("addFlix id", flix._id);
      res.json(flix._id);
    })
    .catch((err) => {
      console.log("Error in inserting data", err);
    });
};

exports.updateFlix = (req, res, next) => {
  const flixId = req.params.flixId;
  // console.log("flixId", flixId);

  FlixModel.findById(flixId)
    .then((flix) => {
      if (!flix) {
        console.log("Flix not found with Id", flixId);
        res.status(404).json({
          message: "Flix not found with Id" + flixId,
        });
      }
      console.log("Retrieved flix", flix);

      flix.title = req.body.title;
      flix.thumbnailUrl = req.body.thumbnailUrl;
      flix.videoUrl = req.body.videoUrl;
      flix.desc = req.body.desc;
      flix.category = req.body.category;
      flix.genre = req.body.genre;
      flix.releaseDate = req.body.releaseDate;
      flix.imdb = req.body.imdb;
      flix.languages = req.body.languages;
      return flix.save();
    })
    .then((flix) => {
      console.log("Updated Flix as", flix);
      res.status(200).json(flix);
    })
    .catch((err) => {
      console.log("Error in updating flix", err);
    });
};

exports.deleteFlix = (req, res, next) => {
  const flixId = req.params.flixId;
  FlixModel.findById(flixId)
    .then((flix) => {
      if (!flix) {
        console.log("Flix not found with Id", flixId);
        res.status(404).json({
          message: "Flix not found with Id" + flixId,
        });
      }
      console.log("Retrieved flix", flix);
      return FlixModel.findByIdAndDelete(flixId);
    })
    .then((flix) => {
      console.log("Deleted flix", flix);
      res.status(200).json({
        flag: true,
        id: flix._id,
      });
    })
    .catch((err) => {
      console.log("Error in deleting flix", err);
    });
};
