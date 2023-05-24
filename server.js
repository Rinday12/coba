//library
const express = require("express");
const app = express();

const user = [];

//mengatur mesin tampilan (view engine) yang akan digunakan dalam aplikasi.
app.set("view engine", "ejs");

//menggunakan framework express
app.use(express.urlencoded({ extended: false }));

//membuat server HTTP dan menentukan pengaturan rute
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "kyle" });
});

//login
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  res.render("login.ejs");
});

//register
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(3000);
