
const express = require("express");
const transactionsController = require("./controllers/transactions");
const cors = require('cors')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
app.use(express.json()); // this line is adding 'body' key to the req object
app.use(cors())

app.use((req, res, next) => {
  console.log(`${req.method} request made at ${req.url}`);
  next();
});





app.use("/transactions", transactionsController);

// ROOT



app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});


// 404 catch all
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;



// Action	URL	HTTP Verb	CRUD	Description
// 1	Index	/transactions	GET	Read	Get a list (or index) of all transactions
// 2	Show	/transactions/:id	GET	Read	Get an individual view (show one transactions)
// 3	Create	/transactions	POST	Create	Create a new transactions
// 4	Destroy	/transactions/:id	DELETE	Delete	Delete a transactions
// 5	Update	/transactions/:id	PUT	Update	Update a transactions