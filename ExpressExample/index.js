const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 3000;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_cicbv",
  password: "d0KdH3Bhe6DezWHP",
  database: "lab_todo01_c4bozk",
});

// Connect to database
connection.connect();

console.log("Database is connected");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send({
    name: "Apisit Maneerat",
    nickName: "Mixko",
    university: "KMUTT",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/todo", (req, res) => {
    // Assign the params as a variable
    // https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713
    const todoId = req.query.todo_id;
  
    // Regex to check the todo_is is a number only or not
    const checkTodoId = new RegExp(/^\d+$/).test(todoId); // Boolean
  
    // Check if the todo_id is not exist or is not a number, return json with an error
    if (!todoId || !checkTodoId) {
      res.json({
        success: false,
        data: null,
        error: "todo_id is invalid",
      });
    }
  
    connection.query(`SELECT * FROM items WHERE id = ${todoId}`, (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        if (rows[0]) {
          res.json({
            success: true,
            data: rows[0],
            error: null,
          });
        } else {
          res.json({
            success: true,
            data: null,
            error: null,
          });
        }
      }
    });
  });