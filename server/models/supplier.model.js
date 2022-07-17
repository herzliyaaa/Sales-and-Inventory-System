const sql = require("../config/db.config");

// constructor
const Supplier = function(supplier) {
  this.supplierName = supplier.supplierName;
  this.supplierAddress = supplier.supplierAddress;
  this.supplierContact = supplier.supplierContact;
};


Supplier.create = (newSupplier, result) => {
  sql.query("INSERT INTO suppliers SET ?", newSupplier, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created supplier: ", { id: res.insertId, ...newSupplier });
    result(null, { id: res.insertId, ...newSupplier });
  });
};

Supplier.findById = (id, result) => {
  sql.query(`SELECT * FROM suppliers WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found supplier: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Supplier with the id
    result({ kind: "not_found" }, null);
  });
};

Supplier.getAll = (supplierName, result) => {
  let query = "SELECT * FROM suppliers";

  if (supplierName) {
    query += ` WHERE supplierName LIKE '%${supplierName}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("suppliers: ", res);
    result(null, res);
  });
};

// Supplier.getAllPublished = result => {
//   sql.query("SELECT * FROM suppliers WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("Suppliers: ", res);
//     result(null, res);
//   });
// };

Supplier.updateById = (id, supplier, result) => {
  sql.query(
    "UPDATE suppliers SET supplierName = ?, supplierAddress  = ?, supplierContact = ? WHERE id = ?",
    [supplier.supplierName, supplier.supplierAddress, supplier.supplierContact, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Item with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated supplier: ", { id: id, ...supplier });
      result(null, { id: id, ...supplier });
    }
  );
};

Supplier.remove = (id, result) => {
  sql.query("DELETE FROM suppliers WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found supplier with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted supplier with id: ", id);
    result(null, res);
  });
};

Supplier.removeAll = result => {
  sql.query("DELETE FROM suppliers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} suppliers`);
    result(null, res);
  });
};

module.exports = Supplier;
