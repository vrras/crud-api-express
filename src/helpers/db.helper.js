const mysql = require("mysql");
const { get } = require("./config.helper");

// Create a connection to the database
const connection = mysql.createConnection({
    host: get('DB_HOST'),
    user: get('DB_USER'),
    password: get('DB_PASS'),
    database: get('DB_NAME')
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;
