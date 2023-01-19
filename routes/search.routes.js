const express = require("express");
const router = express.Router();

//const search = require("../models/search.model");

router.get('/',(req, res) => {
    res.render("search/info");
});



  module.exports = router;