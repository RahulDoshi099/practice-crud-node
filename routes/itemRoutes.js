const express = require("express");
const router = express.Router();
const itemController =  require("../controller/itemController")
//create new item
router.post("/", itemController.createItem);

//retrive all items
router.get("/", itemController.getAllItems);

//retive a single item from id
router.get("/:id", itemController.getItemById);

//Update an item by ID
router.put("/:id", itemController.updateItem);

//delete item with ID
router.delete("/:id", itemController.deleteItem);


module.exports = router;

