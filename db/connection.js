const mysql = require("mysql2");
require("dotenv").config();
// Connect to database 
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database: "tracker"
    },
    console.log("Connected to the tracker database.")
);

module.exports = db;