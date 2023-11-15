--db/schema.sql
DROP DATABASE IF EXISTS menuItems_dev;
CREATE DATABASE menuItems_dev;

\c menuItems_dev;

CREATE TABLE menuItems (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL REQUIRED,
image_id TEXT NOT NULL,
category TEXT NOT NULL REQUIRED,
description VARCHAR(250) DEFAULT NULL,
price FLOAT NOT NULL REQUIRED,
out_of_stock BOOLEAN REQUIRED,
ranking DECIMAL(1, 1)
CHECK (ranking >=0 AND ranking <= 10)
);







)