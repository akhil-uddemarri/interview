const express = require("express");
const { getResultForQuestion } = require("./results");

const app = express();

app.get("/", (req, res) => {
  const result = getResultForQuestion(req.query.q);
  res.send(result);
});

app.listen(4000, () => {
  console.log("app started and listenting at http://localhost:4000");
});
