const db = require("../db/dbConfig");

const getAllGrubPosts = async () => {

    try {
        const allGrubPosts = await db.any("SELECT * FROM grubposts");
        return allGrubPosts;
    } catch (error) {
        return error;
    };
}

const getGrubPost = async (id) => {
    try {
        const oneGrubPost = await db.one("SELECT * FROM grubposts WHERE id = $1", id);
        return oneGrubPost;;
    } catch (error) {
        return error;
    };
}

const createGrubPost = async (grubpost) => {
    try {

        const newGrubPost = await db.one("INSERT INTO grubposts (name, location, image_id, message, rating, menuitem_id, tweet_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [grubpost.name, grubpost.location, grubpost.image_id, grubpost.message, grubpost.rating, grubpost.menuitem_id, grubpost.tweet_id]
        )
        return newGrubPost;
    } catch (error) {
        return error;
    }

}

const deleteGrubPost = async (id) => {
    try {
        const deletedGrubPost = await db.one("DELETE FROM grubposts WHERE ID = $1 RETURNING *", id)
        return deletedGrubPost;
    } catch (error) {
        return error;
    }
}

const updateGrubPost = async (id, grubpost) => {
    try {
        const updatedGrubPost = await db.one("UPDATE grubposts SET name=$1, location=$2, image_id=$3, message=$4, rating=$5, menuitem_id=$6, tweet_id = $7 WHERE ID = $8 RETURNING *", [grubpost.name, grubpost.location, grubpost.image_id, grubpost.message, grubpost.rating, grubpost.grubpost_id, grubpost.tweet_id, id])

        return updatedGrubPost;

    } catch (error) {
        return error;
    }
}

module.exports = { getAllGrubPosts, getGrubPost, createGrubPost, deleteGrubPost, updateGrubPost };
