const express = require("express");
const { testController } = require("../../controllers");

const router = express.Router();

router.get("/test", testController.test);

module.exports = router;
