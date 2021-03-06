module.exports = app => {
    const items = require("../controllers/item.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", items.create);
  
    // Retrieve all Tutorials
    router.get("/", items.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", items.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", items.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", items.delete);
  
    // Delete all Tutorials
    router.delete("/", items.deleteAll);
  
    app.use('/api/items', router);
  };
  