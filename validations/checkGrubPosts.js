CREATE TABLE grubposts(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    image_id TEXT NOT NULL,
    message TEXT NOT NULL,
    rating DECIMAL(3, 1),
    CHECK(rating >= 0 AND rating <= 10),
    menuitem_id INTEGER REFERENCES menuitems(id) ON DELETE CASCADE
);




const checkName = (req, res, next) => {
    const name = req.body.name;
    if (name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required" })
    }
};

const checkImage_id = (req, res, next) => {
    const image_id = req.body.image_id;

    if (typeof image_id === "string") {
        next()
    } else {
        res.status(400).json({ error: "image_id must be a valid string" })
    }
};

const checkLocation = (req, res, next) => {
    const location = req.body.category;
    if (location) {
        next();
    } else {
        res.status(400).json({ error: "Location must be a valid string" })
    }
};

const checkMessage = (req, res, next) => {
    const message = req.body.Message;

    if (typeof message === "string" && message.length <= 500) {

        next();
    } else {
        res.status(400).json({ error: "Message must be a valid string and be less than or equal to 250 characters" })
    }
};

const checkStock = (req, res, next) => {
    const stock = req.body.out_of_stock;
    if (stock == "true" ||
        stock == "false" ||
        stock == undefined ||
        typeof stock === "boolean") {
        next();
    } else {
        res.status(400).json({ error: "stock must be a boolean" })
    }
};

const checkPrice = (req, res, next) => {
    const price = req.body.price;

    if (typeof price === 'number' && !isNaN(price) && price >= 0) {

        next();
    } else {
        res.status(400).json({ error: "Price must be a valid number" })
    }
};

const checkRating = (req, res, next) => {
    const rating = req.body.rating;

    if (typeof rating === "number" && Number.isFinite(rating) && rating >= 0 && rating <= 10) {

        next();
    } else {
        res.status(400).send({ error: "Ranking is not a valid number between 0.0 and 10" })
    }
}

const checkMenuItems_id = (req, res, next) => {
    const menuitem_id = req.body.menuitem_id;

    if (typeof menuitem_id === "number") {
        next()
    } else {
        res.status(400).json({ error: "MenuItem needs to be  a valid number!" })
    }
};


module.exports = { checkName, checkImage_id, checkLocation, checkMessage, checkStock, checkPrice, checkRating, checkMenuItems_id }


