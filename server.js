const db = require("./db/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
// const consoleTables = require("./console.Tables")

const departments = [];
const employees = [];
const roles = [];
const choice = [
  "View all departments",
  "View all roles",
  "View all employees",
  "Add a department",
  "Add a role",
  "Add an employee",
  "Update an employee role",
];
// Prompt when app is initiated
const intro = [
  {
    type: "list",
    name: "intro",
    message: "What would you like to do?",
    choices: choice,
  },
];

// Prompts for "add a department"
const addDept = [
  {
    type: "input",
    name: "name",
    message: "Enter department name.",
  },
];

let addRole = [];
db.query("SELECT id AS value, name FROM department", (err, data) => {
  if (err) throw err;
  // Prompts for "add a role"
  addRole = [
    {
      type: "input",
      name: "title",
      message: "Enter role name.",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of this role?",
    },
    {
      type: "list",
      name: "department_id",
      message: "What department will this role work in?",
      choices: data,
    },
  ];
});

// Prompts for "add an employee"
const addEmployee = [
  {
    type: "input",
    name: "first_name",
    message: "Enter the employee's first name.",
  },
  {
    type: "input",
    name: "last_name",
    message: "Enter the employee's last name.",
  },
  {
    type: "list",
    name: "role",
    message: "What is this employee's role?",
    choices: [
      "Sales lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Legal Team Lead",
      "Lawyer",
      "Accountant",
    ],
  },
  {
    type: "list",
    name: "manager",
    message: "Who is this employee's manager?",
    choices: ["Ashley Rodriguez", "John Doe", "Sarah Lourd", "Kevin Tupik"],
  },
];

// Prompt to select which employee to "update employee role" for
const updateEmployee = [
  {
    type: "list",
    name: "employee",
    message: "Select which employee's role to update.",
    choices: employees,
  },
  {
    type: "list",
    name: "roles",
    message: "Select the employee's updated role",
    choices: roles,
  },
];

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  init();
});

// Initiate app
function init() {
  inquirer.prompt(intro).then(({ intro: answers }) => {
    console.log(answers);
    if (answers === choice[0]) {
      db.query("SELECT * FROM department", (err, data) => {
        if (err) throw err;
        console.table(data);
        init();
      });
    }
    if (answers === choice[1]) {
      db.query("SELECT * FROM role", (err, data) => {
        if (err) throw err;
        console.table(data);
        init();
      });
    }
    if (answers === choice[2]) {
      db.query("SELECT * FROM employee", (err, data) => {
        if (err) throw err;
        console.table(data);
        init();
      });
    }
    if (answers === choice[3]) {
      inquirer.prompt(addDept).then((answers) => {
        db.query("INSERT INTO department SET ? ", answers, (err, data) => {
          if (err) throw err;
          console.table(data);
          init();
        });
      });
    }
    if (answers === choice[4]) {
      inquirer.prompt(addRole).then((answers) => {
        db.query("INSERT INTO role SET ?", answers, (err, data) => {
          if (err) throw err;
          console.table(data);
          init();
        });
      });
    }
    if (answers === choice[5]) {
      inquirer.prompt(addEmployee).then((answers) => {
      db.query("INSERT INTO employee SET ?", answers, (err, data) => {
        if (err) throw err;
        console.table(data);
        init();
      });
    })
    }

    if (answers === choice[6]) {
      inquirer.prompt(updateEmployee).then((answers) => {
        const updatedEmployee = new roleUpdate(answers.employee, answers.roles);
        employee.id.push(updatedEmployee);
      });
    }
  });
}
