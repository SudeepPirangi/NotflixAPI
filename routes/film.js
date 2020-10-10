const express = require("express");

const router = express.Router;

const filmsController = require("../controllers/film");

router.get("getFilms", filmsController.getFilms());
