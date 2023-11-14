//DEPENDENCIES
const express = require("express");
const menuItems = express.Router();
const reviewsController = require("./reviewsController");
menuItems.use("/:menuItems_id/reviews", reviewsController);

//QUERIES
const {
    getAllMenuItems,
    getMenuItem,
    createMenuItem,
    deleteMenuItem,
    updateMenuItem
} = require("../queries/menuItems");

}
