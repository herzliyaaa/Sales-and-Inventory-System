module.exports = app => {
    const suppliers = require("../controllers/supplier.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", suppliers.create);
  
    // Retrieve all Tutorials
    router.get("/", suppliers.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", suppliers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", suppliers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", suppliers.delete);
  
    // Delete all Tutorials
    router.delete("/", suppliers.deleteAll);
  
    app.use('/api/suppliers', router);
  };
  