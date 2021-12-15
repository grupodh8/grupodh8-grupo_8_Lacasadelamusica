CREATE DATABASE `casa_de_la_musica`;

CREATE TABLE `casa_de_la_musica`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `address` VARCHAR(50) NULL,
  `city` VARCHAR(30) NULL,
  `zip` INT(5) NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `avatar` VARCHAR(80) NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_id` (`id`),
  UNIQUE KEY `uq_avatar` (`avatar`),
  UNIQUE KEY `uq_email` (`email`));
  
    CREATE TABLE `casa_de_la_musica`.`categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `uq_category_id` (`category_id`),
  UNIQUE KEY `uq_name` (`name`));

  CREATE TABLE `casa_de_la_musica`.`brands` (
  `brand_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`brand_id`),
  UNIQUE KEY `uq_brand_id` (`brand_id`),
  UNIQUE KEY `uq_name` (`name`));
  
CREATE TABLE `casa_de_la_musica`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `sku` BIGINT(12) NOT NULL,
  `stock` TINYINT(3) NOT NULL,
  `description` TEXT(500) NULL,
  `category_id` INT NOT NULL,
  `classification` VARCHAR(30) NOT NULL,
  `type` VARCHAR(30) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(60) NOT NULL,
  `brand_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_id` (`id`),
  UNIQUE KEY `uq_sku` (`sku`),
  CONSTRAINT `category_id_product`
    FOREIGN KEY (`category_id`)
    REFERENCES `casa_de_la_musica`.`categories` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
CONSTRAINT `brand_id_product`
    FOREIGN KEY (`brand_id`)
    REFERENCES `casa_de_la_musica`.`brands` (`brand_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
  

