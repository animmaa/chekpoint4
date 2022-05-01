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
    `lien_recette` VARCHAR(255),
    `id_admin` INT,
    FOREIGN KEY (id_admin) REFERENCES admins(id)
);

CREATE TABLE `plats_ingredients` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_plats` INT NOT NULL,
    FOREIGN KEY (id_plats) REFERENCES plats(id),
    `id_ingredients` INT NOT NULL,
    FOREIGN KEY (id_ingredients) REFERENCES ingredients(id)
);

INSERT INTO `admins`  (`name`,`password`) VALUES ('davy', '$argon2i$v=19$m=16,t=2,p=1$aGdVbmpNZUZnbHJGV2ltTA$LbvKR3RM5gcX1FCRo3yP6g');

INSERT INTO `ingredients` (`name`) VALUES ('carrote'), ('pomme de terre'), ('sauce soja'), ("oignon"), ("ail"), ("boeuf"), ("boite de curry"), ("tofu"), ("algue"), ("miso"), ("dashi"), ("riz"), ("vinaigre"), ("sucre"), ("vinaigre de riz"), ("feuille d'algue"), ("saumon"), ("surimi"), ("thon"), ("oeuf");

INSERT INTO `plats` (`name`, `image`, `lien_recette`, `id_admin`) VALUES ('soupe miso', 'miso.jpg', 'https://www.youtube.com/watch?v=RPiL8VBaKXY&t=1s&ab_channel=Lesrecettesd%27unejaponaise', 1), ('maki', 'maki.jpg', 'https://www.youtube.com/watch?v=PAZHp-Y2Gu8&t=2s&ab_channel=Lesrecettesd%27unejaponaise', 1), ("curry", "curry.png", 'https://www.youtube.com/watch?v=pHKxgFv7AkY&ab_channel=Lesrecettesd%27unejaponaise', 1);

INSERT INTO `plats_ingredients` (`id_plats`, `id_ingredients`) VALUES (1, 8), (1, 9), (1, 10), (1, 11), (1, 4), (2, 12), (2, 13), (2, 14), (2, 15), (2, 16), (2, 17), (2, 18), (2, 19), (2, 20), (3, 1), (3, 2), (3, 4), (3, 5), (3, 6), (3, 7);

