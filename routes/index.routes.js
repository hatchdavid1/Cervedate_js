const express = require('express');
const router = express.Router();


const isLoggedOut = require("../middleware/isLoggedOut");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login");
});

router.get("/signup", isLoggedOut, (req, res) => {
  res.render("auth/signup");
});
module.exports = router;
