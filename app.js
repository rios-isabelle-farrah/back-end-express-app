// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const carsController = require("./controllers/carsController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

app.use("/cars", carsController);

app.get("/", (req, res) => {
  res.send("LEND Parent Support Group Resource Site");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/config.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;





// const express = require("express");
// const transactionsController = require("./controllers/transactions");
// const cors = require('cors')
// const app = express();
// require("dotenv").config();
// const PORT = process.env.PORT || 3001;
// app.use(express.json()); // this line is adding 'body' key to the req object
// app.use(cors())

// // app.use((req, res, next) => {
// //   console.log(`${req.method} request made at ${req.url}`);
// //   next();
// // });





// // app.use("/transactions", transactionsController);

// // ROOT



// // app.get("/", (req, res) => {
// //   res.send("Basic Express App - ROOT");
// // });

// app.get("/", (req, res) => {
//   res.send("LEND Parent Support Group Resource Site");
// });

// /////////////////////////////////////
// // REMOVE AFTER SUCCESSFUL DEPLOYMENT
// /////////////////////////////////////
// const db = require("./db/config.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM days");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.get("*", (req, res) => {
//   res.status(404).send("Page not found");
// });



// // 404 catch all
// app.get("*", (req, res) => {
//   res.status(404).send("Page Not Found!!!");
// });

// module.exports = app;



// Action	URL	HTTP Verb	CRUD	Description
// 1	Index	/transactions	GET	Read	Get a list (or index) of all transactions
// 2	Show	/transactions/:id	GET	Read	Get an individual view (show one transactions)
// 3	Create	/transactions	POST	Create	Create a new transactions
// 4	Destroy	/transactions/:id	DELETE	Delete	Delete a transactions
// 5	Update	/transactions/:id	PUT	Update	Update a transactions





















// // DEPENDENCIES
// const cors = require("cors");
// const express = require("express");

// // CONFIGURATION
// const app = express();
// // const carsController = require("./controllers/carsController");

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON

// // ROUTES

// // app.use("/cars", carsController);

// app.get("/", (req, res) => {
//   res.send("LEND Parent Support Group Resource Site");
// });

// /////////////////////////////////////
// // REMOVE AFTER SUCCESSFUL DEPLOYMENT
// /////////////////////////////////////
// const db = require("./db/config.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.get("*", (req, res) => {
//   res.status(404).send("Page not found");
// });