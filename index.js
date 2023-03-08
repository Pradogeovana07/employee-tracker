const inquirer = require("inquirer")
const mysql = require("mysql2")
require('dotenv').config()

// const Departments = require("./lib/Departments")
// const Employees = require("./lib/Employees")
// const Roles = require("./lib/Roles")

// const fs = require("fs");


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
db.connect((err) => {
  if (err) throw err

})

function menu() {
  inquirer.prompt({
    type: "list",
    message: "What would you like to do?",
    name: "menu",
    choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Finished"]
  })
    .then(answer => {
      if (answer.menu === "View Departments") {
        console.log("stuff")
        db.query(`select * from department`, (err, res) => {
          console.table(res)
          if (err) throw err;
          return menu()
        })
      } else if (answer.menu === "View Roles") {
        console.log("stuff")
        db.query(`select * from role`, (err, res) => {
          console.table(res)
          if (err) throw err;
          return menu()
        })
      } else if (answer.menu === "View Employees") {
        console.log("stuff")
        db.query(`select * from employee`, (err, res) => {
          console.table(res)
          if (err) throw err;
          return menu()
        })
      } else if (answer.menu === "Add a Department") {
        console.log("stuff")
        inquirer.prompt([
          {
            type: "input",
            message: "department name",
            name: "name"
          }
        ]).then(answer => {
          db.query(`insert into department(name) VALUES ("${answer.name}");`, (err, res) => {
            console.table(res)
            if (err) throw err;
            return menu()
          })
        })
      } else if (answer.menu === "Add a Role") {
        console.log("stuff")
        inquirer.prompt([
          {
            type: "input",
            message: "role title",
            name: "title"
          },
          {
            type: "input",
            message: "department id",
            name: "depid"
          },
          {
            type: "input",
            message: "salary?",
            name: "salary"
          },
        ]).then(answer => {
          db.query(`insert into role(title, salary, department_id) VALUES ("${answer.title}", "${answer.salary}", "${answer.depid}");`, (err, res) => {
            console.table(res)
            if (err) throw err;
            return menu()
          })
        })
      }  else if (answer.menu === "Add an Employee") {
        console.log("stuff")
        inquirer.prompt([
          {
            type: "input",
            message: "employee first name",
            name: "firstName"
          },
          {
            type: "input",
            message: "employee last name",
            name: "lastName"
          },
          {
            type: "input",
            message: "roleId",
            name: "roleId"
          },
        ]).then(answer => {
          db.query(`insert into employee(first_name, last_name, role_id) VALUES ("${answer.firstName}", "${answer.lastName}", "${answer.roleId}");`, (err, res) => {
            console.table(res)
            if (err) throw err;
            return menu()
          })
        })
      } else {
        console.log("goodbye!")
        process.exit()
      }
    })
}
menu()