const mysql = require("mysql2/promise");
const {DB_USER, DB_PASSWORD, DB_PORT} = process.env;

function buildConnectionOptions() {
    return {
        host: "localhost",
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: "employee_db",
    };
    console.log('connected to the employee_db.');
}


module.exports = {
    buildConnectionOptions: buildConnectionOptions,
    createConnection: mysql.createConnection,
};