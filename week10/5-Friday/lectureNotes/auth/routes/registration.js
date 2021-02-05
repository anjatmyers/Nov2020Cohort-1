const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.post("/registration", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  // encrypt password
  let encryptedPass = bcrypt.hashSync(password, 8);
  try {
    let insert = await db.users.create({
      username,
      password: encryptedPass,
      email,
      roleID: 1,
    });
    res.redirect("/login");
  } catch (err) {
    res.redirect("/error");
  }

});

module.exports = router;
