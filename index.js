require('dotenv').config();
const {
    buildConnectionOptions, createConnection,
} = require("./config/dbConfig");

const inquirer = require('inquirer');

const title = 'EMPLOYEE TRACKER';

async function main() {
    console.log(title);
    const connection = await createConnection(buildConnectionOptions());

    const {createPromptModule} = inquirer;
    const prompt = createPromptModule();

    const selectedOption = await prompt([
        {
            type: 'list',
            name: 'menuOption',
            choices: ['View All Departments', 'View All Roles', 'View All Employess', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        },
    ]);

    console.log(selectedOption);

    const [department] = await connection.execute("SELECT * FROM department;", [])
    console.table(department);
    

}

main();