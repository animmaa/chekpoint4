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
    FOREIGN KEY (id_plats) REFERENCES plats(id),
    `id_ingredients` INT NOT NULL,
    FOREIGN KEY (id_ingredients) REFERENCES ingredients(id)
);

INSERT INTO `admins`  (`name`,`password`) VALUES ('davy', 'password');

INSERT INTO `ingredients` (`name`) VALUES ('carrote'), ('pomme de terre'), ('sauce soja'), ("oignon"), ("ail"), ("boeuf"), ("boite de curry"), ("tofu"), ("algue"), ("miso"), ("dashi"), ("riz"), ("vinaigre"), ("sucre"), ("vinaigre de riz"), ("feuille d'algue"), ("saumon"), ("surimi"), ("thon"), ("oeuf");

INSERT INTO `plats` (`name`, `image`, `id_admin`) VALUES ('soupe miso', 'image1.png', 1), ('maki', 'image2.png', 1), ("curry", "image3.png", 1);

INSERT INTO `plats_ingredients` (`id_plats`, `id_ingredients`) VALUES (1, 8), (1, 9), (1, 10), (1, 11), (1, 4), (2, 12), (2, 13), (2, 14), (2, 15), (2, 16), (2, 17), (2, 18), (2, 19), (2, 20), (3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7);

