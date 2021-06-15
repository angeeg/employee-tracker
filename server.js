const db = require("./db/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const inputCheck = require("../utils/inputCheck.test");
const consoleTables = require("./console.Tables")
const PORT = process.env.PORT || 3001;
const app = express();

// add express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const departments = [];
const employees = [];
const roles = [];

// Prompt when app is initiated
const intro = [
    {
        type: "list",
        name: "intro",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", 'Add an employee', "Update an employee role"]
    }
];

// Prompts for "add a department" 
const addDept = [
    {
        type: "input",
        name: "newDept",
        message: "Enter department name."
    },
];

// Prompts for "add a role"
const addRole = [
    {
        type: "input",
        name: "role",
        message: "Enter role name."
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary of this role?"
    },
    {
        type: "input",
        name: "department",
        message: "What department will this role work in?",
        choices: ["Sales", "Engineering", "Finance", "Legal"]
    },
];

// Prompts for "add an employee"
const addEmployee = [
    {
        type: "input",
        name: "first_name",
        message: "Enter the employee's first name."
    },
    {
        type: "input",
        name: "last_name",
        message: "Enter the employee's last name."
    },
    {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Sales lead", "Salesperson", "Lead Engineer", "Software Engineer", "Legal Team Lead", "Lawyer", "Accountant"]
    },
    {
        type: "list",
        name: "manager",
        message: "Who is this employee's manager?",
        choices: ["Ashley Rodriguez", "John Doe", "Sarah Lourd", "Kevin Tupik"]
    },
]

// Prompt to select which employee to "update employee role" for 
const updateEmployee = [
    {
        type: "list",
        name: "employee",
        message: "Select which employee's role to update.",
        choices: [employee.arr]
    },
    {
        type: "list",
        name: "roles",
        message: "Select the employee's updated role",
        choices: [roles]
    }
];

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

// Initiate app 
function init() {
    inquirer.prompt(intro).then((answers => {
        if (answers === choice[0]) {
            console.log(departments);
        }
        if (answers === choice[1]) {
            console.log(roles);
        }
        if (answers === choice[2]) {
            console.log(employees)
        }
        if (answers === choice[3]) {
            inquirer.prompt(addDept).then(answers => {
                const newDept = new Department(answers.id, answers.name)
                departments.push(newDept)
            })
        }
        if (answers === choice[4]) {
            inquirer.prompt(addRole).then(answers => {
                const newRole = new Role(answers.id, answers.title, answers.salary, answers.department_id)
                departments.push(newRole)
            })
        }
        if (answers === choice[5]) {
            inquirer.prompt(addEmployee).then(answers => {
                const newEmployee = new Employee (answers.id, answers.first_name, answers.last_name, answers.role_id, answers.manager_id)
                departments.push(newEmployee)
            })
        }
        if (answers === choice[6]) {
            inquirer.prompt(updateEmployee).then(answers => {
                const updatedEmployee = new roleUpdate(answers.employee, answers.roles)
                employee.id.push(updatedEmployee)
            })
        }
    }))
};

init();
