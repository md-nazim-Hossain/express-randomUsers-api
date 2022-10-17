const express = require("express");
randomUserControllers = require("../../controllers/randomUsers.controllers");
const limiter = require("../../middleware/apiRateLimit.middleWare");

const router = express.Router();

router.get("/all", randomUserControllers.getAllUsers);
router.post("/save", randomUserControllers.saveUser);
router.delete("/delete", randomUserControllers.delete);
router.get("/random/:id", randomUserControllers.user);
router.patch("/update/:id", randomUserControllers.update);
router.patch("/bulk-update", randomUserControllers.bulkUpdate);

module.exports = router;
