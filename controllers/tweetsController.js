const express = require('express');
const tweets = express.Router({ mergeParams: true });

const { getMenuItem } = require("../queries/menuItems.js");

//QUERIES

const {
    getAllTweets,
    getTweet,
    newTweet,
    updateTweet,
    deleteTweet
} = require("../queries/tweets.js");


//VALIDATIONS

const {
    checkUsername,
    checkImage_id,
    checkLocation,
    checkCaption,
    checkTime,
    checkHashtags,
    checkRanking,
    checkMenuItems_id
} = require("../validations/checkTweets.js");


//INDEX 
tweets.get("/", async (req, res) => {
    const { menuItems_id } = req.params;
    const allTweets = await getAllTweets(menuItems_id);
    const tweet = await getMenuItem(menuItems_id);
    // console.log("Do I have tweets?", allTweets)
    if (tweet.id) {
        res.status(200).json({ ...tweet, allTweets });
    } else {
        res.status(500).json({ error: "Your twitter wall is empty.. Troll a political thread, post a tweet no one will comment on, and retweet it, or provoke a parody account" })
    }
});

//SHOW
tweets.get("/:id", async (req, res) => {
    const { menuItems_id, id } = req.params;
    const tweet = await getTweet(id, menuItems_id);
    const menuitem = await getMenuItem(menuItems_id);
    console.log("hahahah", tweet)
    if (tweet.id) {
        res.json({ ...menuitem, tweet });
    } else {
        res.status(404).json({ error: "Twitter is temporarily down, but only for a troll like you!" });
    }
});
//CREATE
tweets.post("/", checkUsername, checkImage_id, checkLocation, checkCaption, checkTime, checkHashtags, checkRanking, checkMenuItems_id, async (req, res) => {
    const { menuItems_id } = req.params;
    const tweets = await newTweet({ menuItems_id, ...req.body });
    res.status(200).json(tweets);
});


//UPDATE 

tweets.put("/:id", checkUsername, checkImage_id, checkLocation, checkCaption, checkTime, checkHashtags, checkRanking, checkMenuItems_id, async (req, res) => {
    const { id, menuItems_id } = req.params;
    const updatedTweet = await updateTweet({ menuItems_id, id, ...req.body });

    if (updatedTweet.id) {
        res.status(200).json({ updatedTweet });
    } else {
        res.status(404).json({ error: "Your tweet was flagged for disinformation." })
    }
});

//DELETE

tweets.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedTweet = await deleteTweet(id);

    if (deletedTweet.id) {
        res.status(200).json(deletedTweet);
    } else {
        res.status(404).json({ error: "Tweet not found. Just deactivate your whole twitter account at this point." });
    }
});

module.exports = tweets;