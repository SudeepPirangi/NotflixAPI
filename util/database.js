const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db; // indicates it is internal to file

const mongoConnect = (callback) => {
  console.log("Inside MongoClient Connect()");
  MongoClient.connect(
    "mongodb+srv://sudeep:sudeep@cluster0.tpkeg.azure.mongodb.net/Notflix?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("Mongo Client connection success");
      _db = client.db();
      console.log(_db);
      callback();
    })
    .catch((err) => {
      console.log("Mongo Client connection error", err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    console.log("inside getDB");
    return _db;
  }
  throw "Database not found";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
// module.exports = mongoConnect;

// mongo atlas private key
// 36538dbc-ab9e-464d-b675-8ddcb27fd3b2
// mongodb+srv://sudeep:<password>@cluster0.tpkeg.azure.mongodb.net/test
