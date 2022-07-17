const express = require("express");
const cors = require("cors");
const logger = require('morgan');
const itemRoutes = ("./server/routes/item.route");
const customerRoutes = ("./server/routes/customer.route");
const supplierRoutes = ("./server/routes/supplier.route");
const app = express();


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

app.use(logger('dev'));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "HELLO WORLD." });
});

// app.use("/items", itemRoutes);
require(itemRoutes)(app);
require(customerRoutes)(app);
require(supplierRoutes)(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});