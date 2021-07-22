INSERT INTO department (id, name)
VALUES
    (1, "Sales"),
    (2, "Engineering"),
    (3, "Finance"),
    (4, "Legal");

INSERT INTO role (id, title, salary, department)
VALUES
    (1, "Sales Lead", 100000, "Sales"),
    (2, "Salesperson", 80000, "Sales"),
    (3, "Lead Engineer", 15000, "Engineering"),
    (4, "Software Engineer", 120000, "Engineering"),
    (5, "Legal Team Lead", 250000, "Legal"),
    (6, "Lawyer", 190000, "Legal"),
    (7, "Accountant", 125000, "Finance");

INSERT INTO employee (id, first_name, last_name, title, department, salary, manager)
VALUES
    (1, "John", "Doe", "Sales Lead", "Sales", 10000, "Ashley Rodriguez"),
    (2, "Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe"),
    (3, "Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, NULL),
    (4, "Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez"),
    (6, "Malia", "Brown", "Accountant", "Finance", 125000, NULL),
    (7, "Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, NULL),
    (8, "Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd"),
    (10, "Tammer", "Galal", "Software Engineer", "Engineering", 120000, "Kevin Tupik");


