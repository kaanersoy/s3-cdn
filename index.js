const express = require("express");
const app = express();
const router = require("./router");

// middlewares
app.use(router);

app.get("/", (_,res) => {
  res.json({
    "🦄": "emre"
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
