const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res, next) => {
    next();
})

module.exports = router;