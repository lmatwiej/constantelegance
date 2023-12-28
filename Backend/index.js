const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const wardrobes = require("./routes/wardrobes");
const orders = require("./routes/orders");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/wardrobes", wardrobes);
app.use("/api/orders", orders);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});

