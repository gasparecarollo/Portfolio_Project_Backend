const checkUsername = (req, res, next) => {
    const username = req.body.username;
    if (username) {
        next();
    } else {
        res.status(400).json({ error: "Username is required" })
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
    const location = req.body.location;
    if (location) {
        next();
    } else {
        res.status(400).json({ error: "Location must be a valid string" })
    }
};

const checkCaption = (req, res, next) => {
    const caption = req.body.caption;

    if (typeof caption === "string" && caption.length <= 500) {

        next();
    } else {
        res.status(400).json({ error: "Caption must be a valid string and be less than or equal to 250 characters" })
    }
};


const checkHashtags = (req, res, next) => {
    const hashtags = req.body.hashtags;

    if (typeof hashtags === "string" && hashtags.includes("#")) {

        next();
    } else {
        res.status(400).json({ error: "Hashtags must be a valid string and include #" })
    }
};


const checkRanking = (req, res, next) => {
    const ranking = req.body.ranking;

    if (typeof ranking === "number" && Number.isFinite(ranking) && ranking >= 0 && ranking <= 10) {

        next();
    } else {
        res.status(400).send({ error: "Ranking is not a valid number between 0.0 and 10" })
    }
};

const checkTime = (req, res, next) => {
    const time = req.body.time;
    const timeRegex = /^\d{2}:\d{2}$/;
    if (typeof time === "string" && timeRegex.test(time)) {
        next();
    } else {
        res.status(400).send({ error: "Time is not a valid TIMESTAMP with the format HH24:MI" })
    }
};

const checkMenuItems_id = (req, res, next) => {
    const menuitem_id = req.body.menuitem_id;

    if (typeof menuitem_id === "number") {
        next()
    } else {
        res.status(400).json({ error: "MenuItem needs to be  a valid number!" })
    }
};

module.exports = { checkUsername, checkImage_id, checkLocation, checkCaption, checkTime, checkHashtags, checkRanking, checkMenuItems_id }


