const mongoose = require("mongoose");
const URI = process.env.URI || "mongodb://localhost:27017/Taskio";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.error("Error: occurred in DB connection.");
});

db.on("open", () => {
  console.log("DB connected successfully.");
});
