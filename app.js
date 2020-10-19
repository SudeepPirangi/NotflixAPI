const path = require("path");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const port = process.env.PORT || 3200;
const flixData = require("./data/flix");
const myProcess = require("./nodemon.json");
const flixRoute = require("./routes/flixRoute");

console.log("NODE_ENV", process.env.NODE_ENV || "Development");

const app = express();

const appLogStream = fs.createWriteStream(path.join(__dirname, "app.log"), {
  flags: "a",
});

app.use(helmet());
app.use(morgan("combined", { stream: appLogStream }));
app.use(bodyParser.json());

// REST configurations
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(flixRoute);

const mongo_user = process.env.MONGO_USER;
const mongo_pwd = process.env.MONGO_PWD;
const mongo_db = process.env.MONGO_DB;

mongoose
  .connect(
    `mongodb+srv://${mongo_user}:${mongo_pwd}@cluster0.tpkeg.azure.mongodb.net/${mongo_db}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected\nServer is running on port ${port}`);
    }); // 3000 is being used by React
  })
  .catch((err) => {
    console.log("DB Connectivity error: ", err);
  });
