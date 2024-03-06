const { PORT } = require("./utils/config.js");
const Database = require("./models/database.js");
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require("./app.js");
//CONNECT TO DATABASE
Database.init();

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT} ...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
