CREATE DATABASE aula_api;
USE aula_api;

CREATE TABLE task(
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status ENUM("concluido", "pendente")
)