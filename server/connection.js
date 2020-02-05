const mongoose = require("mongoose");
const URL = process.env.URL || "mongodb://localhost:27017";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.error("Error occurred in DB connection.");
});

db.on("open", () => {
  console.log("DB connected successfully.");
});
