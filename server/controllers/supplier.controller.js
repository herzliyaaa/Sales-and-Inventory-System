const Supplier = require("../models/supplier.model");

// Create and Save a new supplier
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a supplier
  const supplier = new Supplier({
    supplierName: req.body.supplierName,
    supplierAddress: req.body.supplierAddress,
    supplierContact: req.body.supplierContact
  });

  // Save supplier in the database
  Supplier.create(supplier, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Supplier."
      });
    else res.send(data);
  });
};

// Retrieve all Items from the database (with condition).
exports.findAll = (req, res) => {
  const supplierName = req.query.supplierName;

  Supplier.getAll(supplierName, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });
};

// Find a single Supplier by Id
exports.findOne = (req, res) => {
  Supplier.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Supplier with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Supplier with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Suppliers
exports.findAllPublished = (req, res) => {
  Supplier.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Suppliers."
      });
    else res.send(data);
  });
};

// Update a Supplier identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Supplier.updateById(
    req.params.id,
    new Supplier(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Supplier with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Supplier with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Supplier with the specified id in the request
exports.delete = (req, res) => {
  Supplier.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Supplier with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Supplier with id " + req.params.id
        });
      }
    } else res.send({ message: `Supplier was deleted successfully!` });
  });
};

// Delete all Suppliers from the database.
exports.deleteAll = (req, res) => {
  Supplier.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Suppliers."
      });
    else res.send({ message: `All Suppliers were deleted successfully!` });
  });
};
