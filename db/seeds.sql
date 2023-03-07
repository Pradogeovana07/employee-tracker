INSERT INTO department (name)
VALUES ("engineering"),
       ("hr"),
       ("legal"),
       ("operations"),
       ("sales");

INSERT INTO role (title, salary, department_id)
VALUES ("engineer", 100000.00, 1),
 ("hr-person", 200000.00, 2),
 ("lawyer", 300000.00, 3),
 ("receptionist", 400000.00, 4),
 ("sales lead", 500000.00, 5)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("geovana","doe", 1, null),
("jacob","doe", 2, null),
("brian","doe", 3, null),
("jane","doe", 4, null),
("john","doe", 5, null)
;
