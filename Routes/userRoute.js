const express = require("express");
const router = express.Router();
const { getAllUsers, createUser, getOneUser, updateUser, deleteUser } = require("../Controllers/userController");


router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);
module.exports = router;