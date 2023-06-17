INSERT INTO department (name)
VALUES ('IT'), ('SALES'), ('FINANCE');


INSERT INTO role (id, title, salary, department_id)     
VALUES (1, "Sales Lead", 75000, 2),
       (2, "Salesperson", 45000, 2),
       (3, "Project Manager", 85000, 1),
       (4, "Software Developer", 65000,1),
       (5, "Technical Support", 60000, 1),
       (6, "Accountant", 50000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Mike", "Chan", 2, 2),
       (2, "Ashley", "Rogers", 1, 1),
       (3, "Tom", "Allen", 2, 2),
       (4, "Sarah", "Smith", 1, 1),
       (5, "Kevin", "Brown", 3, 0);