const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const donanteRouter = require("./routes/donante");
const donationRouter = require("./routes/donation");
const { port } = require("./config");

app.use(bodyParser.json());

const server = http.listen(port, () =>
  console.log(`Listening on http://localhost:${server.address().port}`)
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*")
  next()
}
)

app.use("/api/donante", donanteRouter);
app.use("/api/donacion", donationRouter);