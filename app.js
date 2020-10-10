const express = require("express");

// require("dotenv").config();
const port = process.env.PORT || 3200;
const filmsData = require("./data/films");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

const filmRoutes = require("./routes/film");

app.use("/films", filmRoutes);

app.get("/", (req, res, next) => {
  res.statusCode = 200;
  res.send(filmsData);
});

mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }); // 3000 is being used by React
});
