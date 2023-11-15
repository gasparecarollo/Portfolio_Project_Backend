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

const checkCategory = (req, res, next) => {
    const category = req.body.category;
    if (category) {
        next();
    } else {
        res.status(400).json({ error: "Category must be a valid string" })
    }
};

const checkDescription = (req, res, next) => {
    const description = req.body.description;

    if (typeof description === "string" && description.length <= 250) {

        next();
    } else {
        res.status(400).json({ error: "Description must be a valid string and be less than or equal to 250 characters" })
    }
};


const checkStock = (req, res, next) => {
    const stock = req.body.out_of_stock;
    if (out_of_stock == "true" ||
        out_of_stock == "false" ||
        out_of_stock == undefined ||
        typeof stock === "boolean") {
        next();
    } else {
        res.status(400).json({ error: "Out_of_stock must be a boolean" })
    }
};

const checkPrice = (req, res, next) => {
    const price = req.body.cost;

    if (typeof price === 'number' && !isNAN(cost) && cost >= 0) {

        next();
    } else {
        res.status(400).json({ error: "Price must be a valid number" })
    }
};

const checkRanking = (req, res, next) => {
    const ranking = req.body.ranking;

    if (typeof ranking === "number" && Number.isFinite(ranking) && ranking >= 0 && ranking <= 10) {

        next();
    } else {
        res.status(400).send({ error: "Ranking is not a valid number between 0.0 and 10" })
    }
}

module.exports = { checkName, checkImage_id, checkCategory, checkDescription, checkStock, checkPrice, checkRanking }


