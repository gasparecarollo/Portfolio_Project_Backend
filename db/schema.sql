--db/schema.sql
DROP DATABASE IF EXISTS menuitems_dev;
CREATE DATABASE menuitems_dev;

\c menuitems_dev;

CREATE TABLE menuitems (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
image_id TEXT NOT NULL,
category TEXT NOT NULL,
description VARCHAR(500) DEFAULT NULL,
price FLOAT NOT NULL,
out_of_stock BOOLEAN,
ranking DECIMAL(3, 1)
CHECK (ranking >= 0 AND ranking <= 10)
);

CREATE TABLE tweets (
id SERIAL PRIMARY KEY,
username TEXT NOT NULL,
location TEXT NOT NULL,
time TIMESTAMP,
image_id TEXT NOT NULL,
caption VARCHAR(150) DEFAULT NULL,
hashtags TEXT NOT NULL,
menuitem_id INTEGER REFERENCES menuitems (id) ON DELETE CASCADE
);

CREATE TABLE grubposts(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
location TEXT NOT NULL,
image_id TEXT NOT NULL,
message VARCHAR(500) DEFAULT NULL,
rating DECIMAL(3,1),
CHECK (rating >= 0 AND rating <= 10),
menuitem_id INTEGER REFERENCES menuitems (id) ON DELETE CASCADE
);