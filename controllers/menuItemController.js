//DEPENDENCIES
const express = require("express");
const menuItems = express.Router();
// const reviewsController = require("./reviewsController");
// menuItems.use("/:menuItems_id/reviews", reviewsController);

//QUERIES
const {
    getAllMenuItems,
    getMenuItem,
    createMenuItem,
    deleteMenuItem,
    updateMenuItem
} = require("../queries/menuItems");

//VALIDATIONS
const {
    checkName,
    checkImage_id,
    checkCategory,
    checkDescription,
    checkPrice,
    checkStock,
    checkRanking
} = require("../validations/checkMenuItems");

//INDEX
menuItems.get("/", async (req, res) => {
    const allMenuItems = await getAllMenuItems();

    if (allMenuItems[0]) {
        res.status(200).json(allMenuItems);

    } else {

        res.status(500).json({ error: "Server error" });
    }

});

//SHOW
menuItems.get("/:id", async (req, res) => {
    const { id } = req.params;
    const menuItem = await getMenuItem(id);
    if (menuItem) {
        res.json(menuItem);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

//CREATE
menuItems.post("/", checkName, checkImage_id, checkCategory, checkDescription, checkPrice, checkStock, checkRanking, async (req, res) => {
    try {
        const menuItem = await createMenuItem(req.body);
        res.json(menuItem)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});


//UPDATE
menuItems.put("/:id", checkName, checkCategory, checkImage_id, checkDescription, checkPrice, checkStock, checkRanking, async (req, res) => {
    const { id } = req.params;
    const updatedMenuItem = await updateMenuItem(id, req.body);
    res.status(200).json(updatedMenuItem);

})

//DELETE
menuItems.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedMenuItem = await deleteMenuItem(id);

    if (deletedMenuItem.id) {
        res.status(200).json(deletedMenuItem);
    } else {
        res.status(404).json("Menu Item not found");
    }
});

module.exports = menuItems;