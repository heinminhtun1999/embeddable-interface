const express = require("express");
const path = require("path");
const cors = require("cors");

const { getData } = require("./dummy.js");

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://embeddable-interface-test-243e558348f9.herokuapp.com/"
    : "http://127.0.0.1:3000/";

let data = null;
getData().then((d) => (data = d));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/getMenu", (req, res) => {
  const { machine_id } = req.body;
  res.status(200).json({
    interface: `<iframe src="${baseUrl}embed.js?machine_id=${machine_id}" width="600" height="600" class="z-50 rounded shadow"></iframe>`,
  });
});

app.get("/embed.js", (req, res) => {
  const { machine_id } = req.query;
  const menu = data[machine_id];
  res.render("index.ejs", { menu });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
