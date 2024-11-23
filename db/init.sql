create database maricultura_e_cidadania;

use maricultura_e_cidadania;

create Table entrevistas (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200),
    data DATE,
    link VARCHAR(200),
    descricao VARCHAR(500) ,
    imagem VARCHAR(100) 
);