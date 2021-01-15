
-- DROP TABLE student;

-- CREATE TABLE student (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar NOT NULL,
--     website varchar,
--     github_username varchar,
--     points integer DEFAULT 0 CHECK (points >= 0),
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean DEFAULT FALSE

-- );

-- INSERT INTO student (name, website, github_username, gender, cohort_start_date)
-- VALUES ('Veronica', 'vero@me.com', 'verogit', 'F', '2021-01-13');

--CRUD
-- INSERT INTO student VALUES
-- (DEFAULT, 'Joe', 'joe@me.com', 'joe123', 4, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'Kanny', 'Kanny@me.com', 'Kanny123', 40, 'F', '2021-01-13', FALSE),
-- (DEFAULT, 'Claude', 'Claude@me.com', 'Claude123', 41, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'MattC', 'MattC@me.com', 'MattC123', 34, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'MattP', 'MattP@me.com', 'MattP123', 24, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'Andrea', 'Andrea@me.com', 'Andrea123', 74, 'F', '2021-01-13', FALSE),
-- (DEFAULT, 'Kim', 'Kim@me.com', 'Kim123', 42, 'F', '2021-01-13', FALSE),
-- (DEFAULT, 'Ally', 'Ally@me.com', 'Ally123', 14, 'F', '2021-01-13', FALSE),
-- (DEFAULT, 'Adam', 'Adam@me.com', 'Adam123', 24, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'Jacob', 'Jacob@me.com', 'Jacob123', 94, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'Cedael', 'Cedael@me.com', 'Cedael123', 34, 'M', '2021-01-13', FALSE),
-- (DEFAULT, 'MattR', 'MattR@me.com', 'MattR123', 54, 'M', '2021-01-13', FALSE);

-- INSERT INTO student (name, website, github_username, gender, cohort_start_date)
-- VALUES ('Veronica', 'vero@me.com', 'verogit', 'F', '2021-01-13');




-- UPDATE student SET points = 8 WHERE id = 1;

-- UPDATE student SET graduated = TRUE;

-- UPDATE student SET points = 99, graduated = FALSE WHERE id = 4;

-- DELETE FROM student;
-- DELETE FROM student WHERE id = 14;

-- SELECT * FROM student;

-- SELECT name, website FROM student;

-- SELECT name FROM student WHERE gender = 'M';
-- SELECT name, points FROM student WHERE points >= 50;
-- SELECT name, points FROM student WHERE points >= 50 and gender = 'M';


-- SELECT * FROM student  WHERE name like '%Matt%';
-- SELECT * FROM student  WHERE name ilike '%matt%';

-- ALTER TABLE student ADD last_name varchar(15);
-- ALTER TABLE student ADD age integer DEFAULT 18;

-- ALTER TABLE student DROP COLUMN last_name;

-- ALTER TABLE student ALTER COLUMN website TYPE varchar(100);

-- SELECT COUNT (*) FROM student;

-- SELECT SUM(points) FROM student;
-- SELECT AVG(points) FROM student;
-- SELECT MAX(points) FROM student;
-- SELECT MIN(points) FROM student;


-- SELECT name, points, gender FROM student ORDER BY gender, points;


SELECT * FROM student ORDER BY points LIMIT 5 OFFSET 5;