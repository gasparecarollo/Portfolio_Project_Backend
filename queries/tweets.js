const db = require('../db/dbConfig');

const getAllTweets = async (menuitems_id) => {
    try {
        const allTweets = await db.any("SELECT * FROM tweets WHERE menuitem_id=$1", menuitems_id);
        return allTweets;
    } catch (error) {
        return error;
    }
};

const getTweet = async (id) => {
    try {
        const oneTweet = await db.one("SELECT * FROM tweets WHERE id=$1", id);
        return oneTweet;
    } catch (error) {
        return error;
    }
};

const newTweet = async (tweet) => {
    try {
        const newTweet = await db.one("INSERT INTO tweets (username, image_url, location, time, caption, menuitem_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                tweet.username,
                tweet.image_url,
                tweet.location,
                tweet.time,
                tweet.caption,
                tweet.menuitem_id
            ]
        );
        return newTweet;

    } catch (error) {

        return error;
    }
};

const updateTweet = async (tweet) => {
    try {
        const updatedTweet = await db.one("UPDATE tweets SET username=$1, image_url=$2, location=$3, time=$4, caption=$5, menuitem_id=$6 WHERE id=$7 RETURNING *", [
            tweet.username,
            tweet.image_url,
            tweet.location,
            tweet.time,
            tweet.caption,
            tweet.menuitem_id,
            tweet.id
        ]
        );
        return updatedTweet;
    } catch (error) {
        return error;
    }
};
const deleteTweet = async (id) => {
    try {
        const deletedTweet = await db.one("DELETE FROM tweets WHERE id =$1 RETURNING *", id);
        return deletedTweet;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllTweets, getTweet, newTweet, updateTweet, deleteTweet }