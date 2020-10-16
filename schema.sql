CREATE DATABASE IF NOT EXISTS foodz;
USE foodz;


CREATE TABLE IF NOT EXISTS menu (
    id int AUTO_INCREMENT,
    food VARCHAR(255), 
    price int,
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS foodz.order (
    id int AUTO_INCREMENT,
    orderedFood VARCHAR(255),
    total int,
    userName VARCHAR(255),
    adress VARCHAR(255),
    phoneNumber int,
    PRIMARY KEY (id)
);



INSERT into menu ( food,price) VALUES ("Makloub",5000);
INSERT into menu ( food,price) VALUES ("Baguette Farcie",5500);
INSERT into menu ( food,price) VALUES ("Libanais",5500);
INSERT into menu ( food,price) VALUES ("Pizza Neptune",10000);
INSERT into menu ( food,price) VALUES ("Pizza Pepperoni",12000);
INSERT into menu ( food,price) VALUES ("Pizza SeaFood",20000);
INSERT into menu ( food,price) VALUES ("Caesar Salad",10000);
INSERT into menu ( food,price) VALUES ("Nicoise Salad",15000);
INSERT into menu ( food,price) VALUES ("Fruit Salad",10000);
INSERT into menu ( food,price) VALUES ("Grilled Chicken",32000);
INSERT into menu ( food,price) VALUES ("Grilled Fish",20000);
INSERT into menu ( food,price) VALUES ("Grilled Steak",18000);

