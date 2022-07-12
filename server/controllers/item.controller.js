const Item = require("../models/item.model");

// Create and Save a new Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Item
  const item = new Item({
    barcode: req.body.barcode,
    description: req.body.description,
    quantity: req.body.quantity,
    cost: req.body.cost
  });

  // Save Item in the database
  Item.create(item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Item."
      });
    else res.send(data);
  });
};

// Retrieve all Items from the database (with condition).
exports.findAll = (req, res) => {
  const description = req.query.description;

  Item.getAll(description, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });
};

// Find a single Item by Id
exports.findOne = (req, res) => {
  Item.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Item with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Items
exports.findAllPublished = (req, res) => {
  Item.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });
};

// Update a Item identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Item.updateById(
    req.params.id,
    new Item(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Item with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Item with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
  Item.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Item with id " + req.params.id
        });
      }
    } else res.send({ message: `Item was deleted successfully!` });
  });
};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {
  Item.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all items."
      });
    else res.send({ message: `All Items were deleted successfully!` });
  });
};
