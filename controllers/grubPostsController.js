//DEPENDENCIES
const express = require("express");
const grubposts = express.Router();
const tweetsController = require("./tweetsController");

//QUERIES
const {
    getAllGrubPosts,
    getGrubPost,
    createGrubPost,
    deleteGrubPost,
    updateGrubPost,
} = require("../queries/grubposts");

//INDEX
grubposts.get("/", async (req, res) => {
    const allGrubPosts = await getAllGrubPosts();

    if (allGrubPosts[0]) {
        res.status(200).json(allGrubPosts);

    } else {

        res.status(500).json({ error: "Server tripped over and dropped your errr... grub all over the floor!" });
    }

});

//SHOW
grubposts.get("/:id", async (req, res) => {
    const { id } = req.params;
    const grubpost = await getGrubPost(id);
    if (grubpost) {
        res.json(grubpost);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

//CREATE
grubposts.post("/", async (req, res) => {
    try {
        const grubpost = await createGrubPost(req.body);
        res.json(grubpost);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});


//UPDATE
grubposts.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedGrubPost = await updateGrubPost(id, req.body);
    res.status(200).json(updatedGrubPost);

})

//DELETE
grubposts.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedGrubPost = await deleteGrubPost(id);

    if (deletedGrubPost.id) {
        res.status(200).json(deletedGrubPost);
    } else {
        res.status(404).json("Grub post not found");
    }
});

module.exports = grubposts;