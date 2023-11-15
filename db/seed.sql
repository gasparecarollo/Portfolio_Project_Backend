--db/seed.sql
\c menuitems_dev;

INSERT INTO menuitems (name,image_id, category, description, price, out_of_stock, ranking) VALUES ('Arancini', 'image_id', 'category', 'Italian rice balls that are stuffed, coated with breadcrumbs and deep fried. They are a staple of Sicilian cuisine.', 10.00, False, 10 ), ('Fried Calzone', 'image_id', 'category', 'A calzone is a pizza folded in two and stuffed with various fillings, from ham and cheese to vegetables, ricotta, parmesan, and even eggs.', 12.50, False, 8), ('Pane e Panelle', 'image_id', 'category', 'Sicilian panelle are chickpea fritters, commonly served in a sandwich, and simply referred to as pane e panelle (bread and panelle). This street food is especially popular in Palermo, where you can find it virtually anywhere in the city.', 6.50, False, 10 ), ('Pani ca Meusa', 'image_id', 'category', 'Pani câ meusa in Sicilian is a unique dish of bread with spleen. This delicacy consists of a soft bun topped with sesame seeds, filled with pieces of veal lung and spleen that have been first boiled then fried in lard.', 8.50, False, 9), ('Stigghiola', 'image_id', 'category', 'Stigghiola is a cut of gut, usually, lamb, goat, or chicken, washed and seasoned with onion, parsley, and other herbs, then rolled on top of spring onion. Once prepared and seasoned, stigghiola is grilled and served hot, topped with salt and lemon.', 5.75, False, 8), ('Cannoli', 'category', 'image_id', 'Cannoli are basically pastries that are filled with chocolate, cream or sweet ricotta and moulded in the shape of a tube.', 4.50, False, 10),
('Parigina', 'category', 'image_id', 'A sheet pan pizza filled with prosciutto, tomatoes,mozzarella, and topped with filo dough (puff pastry).', 9.50, False, 9), (
    'Napoleon', 'category', 'image_id', 'A napoleon or mille-feuille is a classic French pastry with layers of buttery, flaky puff pastry baked until golden and crisp, then filled with alternating layers of pastry cream and whipped cream.', 6.75, False,10),
('Zeppoles', 'category', 'image_id', 'Zeppole is an Italian donut-type pastry that is classically fried but can also be baked. They can have various fillings like custard, honey, pistaccio cream, almonds, jelly, or ricotta cheese.', 8.00, False, 8),
('Brioche con Gelato', 'category', 'image_id', 'Brioche con gelato is a traditional Italian dessert hailing from Sicily. This dessert sandwich consists of a soft, buttery brioche bun that is stuffed with a generous amount of gelato.', 7.00, False, 10),
('Crocche', 'category', 'image_id', 'Crocchè is a famous Sicilian deep-fried snack. Also known as crocchè di patatte, and panzarotti in Neapolitan, it is made with mashed potatoes, eggs, Parmigiano and mozzarella cheese, and parsley or mint leaves. Additional ingredients occasionally include provolone cheese, prosciutto, and salami.', 5.50, False, 7),
('Polpette di Cavallo', 'category', 'image_id','Polpette di cavallo is a spin on the classic Italian meatballs, but it contains horse meat (carne di cavallo) instead of veal or beef. This meat specialty is typically prepared with a mixture of ground horse meat, eggs, breadcrumbs, parmesan, parsley, lemon zest, salt, and pepper, which is then shaped into meatballs which are the size of a small mandarin orange.', 6.50, False, 8),
('Pezzi Di Rosticceria', 'category', 'image_id', 'Pezzi are made of brioche dough that have been baked or fried and stuffed with various fillings. One of the more famous would be the Calzone al Forno (baked brioche stuffed with ham and mozzarella).', 5.00, False, 9),
('Pani cunzatu', 'category', 'image_id', 'The cunzatu bread, or bread cunzato, is a recipe born out of poverty. Typically made with bread seasoned with olive oil, fresh tomatoes, oregano, anchovies, salt and pepper, cheese, and onions.', 6.25, False, 7);









