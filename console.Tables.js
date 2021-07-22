const cTable = require("console.table");


// console.table for "view all departments"
const departmentsTable = cTable([
    {
       name: department.name,
       id: department.id
    }
]);

// console.table for "view all roles"
const rolesTable = cTable([
    {
       id: role.id,
       name: role.title,
       salary: role.salary,
       department: role.department_id
    }
]);

// console.table for "view all employees"
const employeesTable = cTable([
    {
       id: employee.id,
       first_name: employee.first_name, 
       last_name: employee.last_name,
       role: employee.role_title,
       manager: employee.manager_name
    }
]);

module.exports = cTables;