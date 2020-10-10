const Film = require("../models/film");

exports.getFilms = (req, res, next) => {
  Film.getAllFilms()
    .then((data) => {
      console.log("getFilms controller - getFilms", data);
    })
    .catch((err) => {
      console.log("getFilms controller - getFilms", err);
    });
};
