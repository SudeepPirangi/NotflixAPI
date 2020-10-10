const getDB = require("../util/database").getDB;

class Film {
  constructor(
    title,
    thumbnailUrl,
    videoUrl,
    category,
    genre,
    releaseDate,
    imdb,
    languages
  ) {
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.videoUrl = videoUrl;
    this.category = category;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.imdb = imdb;
    this.languages = languages;
  }

  static getAllFilms() {
    const db = getDB();
    // console.log(db.admin().listDatabases());
    return db
      .collection("films")
      .find()
      .toArray()
      .then((res) => {
        console.log("all films", res);
      })
      .catch((err) => {
        console.log("Error in fetching all films", err);
      });
  }
}

module.exports = Film;
