const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const flixController = require("../controllers/flixController");

router.get("/getFlix", flixController.getFlix);

router.post("/addFlix", flixController.addFlix);

router.put("/updateFlix/:flixId", flixController.updateFlix);

router.delete("/deleteFlix/:flixId", flixController.deleteFlix);

module.exports = router;
