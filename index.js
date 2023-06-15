require('dotenv').config();
const {
    buildConnectionOptions, createConnection,
} = require("./config/dbConfig");

async function main() {
    const connection = await createConnection(buildConnectionOptions());

    const [department] = await connection.execute("SELECT * FROM department;", [])
    console.table(department);
    

}

main();