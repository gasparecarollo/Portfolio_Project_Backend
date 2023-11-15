const db = require("../db/dbConfig");

const getAllMenuItems = async () => {

    try {
        const allMenuItems = await db.any("SELECT * FROM menuItems");
        return allMenuItems
    } catch (error) {
        return error
    };
}

const getMenuItem = async (id) => {
    try {
        const oneMenuItem = await db.one("SELECT * FROM menuItems WHERE id = $1", id);
        return oneMenuItem
    } catch (error) {
        return error
    };
}

const createMenuItem = async (menuItem) => {
    try {

        const newMenuItem = await db.one("INSERT INTO menuItems (name, category, image_id, description, price, out_of_stock, ranking) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [menuItem.name, menuItem.category, menuItem.image_id, menuItem.description, menuItem.price, menuItem.out_of_stock, menuItem.ranking]
        )
        return newMenuItem
    } catch (error) {
        return error
    }

}