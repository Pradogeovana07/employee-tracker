const inquirer = require(inquirer)
const mysql = require("mysql2")


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      port: 3306,
      // TODO: Add MySQL password here
      password: process.env.pw,
      database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

  inquirer.prompt({
    type: "list",
    message: "What would you like to do?",
    name: "menu",
    choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Finished"]
  })
  .then(answer=>{
    if(answer.menu === "View Departments"){

    } else if (answer.menu === ""){
        
    }
  })