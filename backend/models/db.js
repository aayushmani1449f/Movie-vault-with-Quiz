const mysql = require("mysql2/promise");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Aayush@01",
  database: "imdb_clone"
});
module.exports = db;