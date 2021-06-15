INSERT INTO department (id, name)
VALUES
    (1, "Sales"),
    (2, "Engineering"),
    (3, "Finance"),
    (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "Sales Lead", 100000, 1),
    (2, "Salesperson", 80000, 1),
    (3, "Lead Engineer", 15000, 2),
    (4, "Software Engineer", 120000, 2),
    (5, "Legal Team Lead", 250000, 4)
    (6, "Lawyer", 190000, 4),
    (7, "Accountant", 125000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "John", "Doe", 1, 3),
    (2, "Mike", "Chan", 2, 1),
    (3, "Ashley", "Rodriguez", 3)
    (4, "Kevin", "Tupik", 4, 3),
    (6, "Malia", "Brown", 7),
    (7, "Sarah", "Lourd", 5),
    (8, "Tom", "Allen", 6, 7),
    (10, "Tammer", "Galal", 4, 4);