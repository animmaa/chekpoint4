DROP TABLE IF EXISTS `plats_ingredients`;
DROP TABLE IF EXISTS `plats`;
DROP TABLE IF EXISTS `ingredients`;
DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `ingredients` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `plats` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `id_admin` INT,
    FOREIGN KEY (id_admin) REFERENCES admins(id)
);

CREATE TABLE `plats_ingredients` (
    `id_plats` INT NOT NULL,
    FOREIGN KEY (id_plats) REFERENCES ingredients(id),
    `id_ingredients` INT NOT NULL,
    FOREIGN KEY (id_ingredients) REFERENCES plats(id)
);

INSERT INTO `admins`  (`name`,`password`) VALUES ('davy', 'password');

INSERT INTO `ingredients` (`name`) VALUES ('carrote'), ('patate'), ('sauce soja');

INSERT INTO `plats` (`name`, `image`, `id_admin`) VALUES ('ramen', 'image1.png', 1), ('maki', 'image2.png', 1);



