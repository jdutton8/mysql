const mysql = require("mysql2");
const {DB_USER, DB_PASSWORD, DB_PORT} = process.env;

const connection = mysql.createConnection({
        host: "localhost",
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: "employee_db",
    });
    



module.exports = connection;