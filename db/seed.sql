--db/seed.sql
\c menuItems_dev;



CREATE TABLE menuItems (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL REQUIRED,
image_url TEXT NOT NULL,
category TEXT NOT NULL REQUIRED,
description TEXT,
price FLOAT NOT NULL REQUIRED,
out_of_stock BOOLEAN REQUIRED,
ranking DECIMAL(1, 1)
CHECK (ranking >=0 AND ranking <= 10)
);

INSERT INTO menuItems (name,image_url, category, description, price, out_of_stock, ranking) VALUES ("Arancini", "image_url", "category", "Italian rice balls that are stuffed, coated with breadcrumbs and deep fried. They are a staple of Sicilian cuisine.", 10.00, False, 10 ), ("Fried Calzone", "category", "A calzone is a pizza folded in two and stuffed with various fillings, from ham and cheese to vegetables, ricotta, parmesan, and even eggs.", 12.50, False, 8), ("Pane e Panelle", "category", "Sicilian panelle are chickpea fritters, commonly served in a sandwich, and simply referred to as pane e panelle (bread and panelle). This street food is especially popular in Palermo, where you can find it virtually anywhere in the city.", 6.50, False, 10 ), ("Pani ca Meusa", "category", "‘Pani câ meusa,’ in Sicilian, is a unique dish of bread with spleen. This delicacy consists of a soft bun, topped with sesame seeds, filled with pieces of veal lung and spleen that have been first boiled, then fried in lard.", 8.50, False, 9), ("Stigghiola", "category", "stigghiola is a cut of gut, usually, lamb, goat, or chicken, washed and seasoned with onion, parsley, and other herbs, then rolled on top of spring onion. Once prepared and seasoned, stigghiola is grilled and served hot, topped with salt and lemon.", 5.75, False, 8), ("Cannoli", "category", "Cannoli are basically pastries that are filled with chocolate, cream or sweet ricotta and moulded in the shape of a tube.", 4.50, False, 10);