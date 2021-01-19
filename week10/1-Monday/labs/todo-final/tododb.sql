--todo2020 db
CREATE TABLE todos(
    id SERIAL NOT NULL PRIMARY KEY,
    description varchar(1000) NOT NULL

);

INSERT INTO todos VALUES 
(DEFAULT,'testing'),
(DEFAULT,'another test');
