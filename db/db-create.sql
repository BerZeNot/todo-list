CREATE DATABASE IF NOT EXISTS todolist;
CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(9) NOT NULL,
    created_at varchar(45) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT CHK_Status CHECK (status IN('PENDENTE', 'CONCLUIDO'))
);