// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
// const carsController = require("./controllers/carsController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

// app.use("/cars", carsController);

app.get("/", (req, res) => {
  res.send("LEND Parent Support Group Resource Site");
});


const db = require("./db/config.js");



const getAllCars = async (uid) => {
  try {
    const query = "SELECT * FROM cars WHERE uid=$1";
    const allCars = await db.any(query, uid);
    return { status: true, payload: allCars };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const getCar = async (id, uid) => {
  try {
    const query = "SELECT * FROM cars WHERE id=$1 and uid=$2";
    const car = await db.one(query, [id, uid]);
    return { status: true, payload: car };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addCar = async (car) => {
  const { make, model, vin, year, odometer, doors, is_default, uid, driver } =
    car;
  try {
    const query =
      "INSERT INTO cars (make, model, vin, year, odometer, doors, is_default, uid, driver) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
    const newCar = await db.one(query, [
      make,
      model,
      vin,
      year,
      odometer,
      doors,
      is_default,
      uid,
      driver,
    ]);
    return { status: true, payload: newCar };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteCar = async (id, uid) => {
  try {
    const query = "DELETE FROM cars WHERE id=$1 AND uid=$2 RETURNING *";
    const deletedCar = await db.one(query, [id, uid]);
    return { status: true, payload: deletedCar };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateCar = async (id, body, uid) => {
  const { make, model, vin, year, odometer, doors, is_default, driver } = body;
  const queryOne = "SELECT * FROM cars WHERE uid=$1 AND id=$2";
  const authCheck = await db.any(queryOne, [uid, id]);
  if (authCheck.length) {
    try {
      const query =
        "UPDATE cars SET make=$1, model=$2, vin=$3, year=$4, odometer=$5, doors=$6, is_default=$7,driver=$8, uid=$9  WHERE id=$10 RETURNING *";
      const updatedCar = await db.one(query, [
        make,
        model,
        vin,
        year,
        odometer,
        doors,
        is_default,
        driver,
        uid,
        id,
      ]);
      return { status: true, payload: updatedCar };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

app.get("cars/", async (req, res) => {
  const uid = req.query.uid;
  try {
    const allCars = await getAllCars(uid);
    res.json(allCars);
  } catch (error) {
    return error;
  }
});


app.get("cars/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const car = await getCar(id, uid);
    res.json(car);
  } catch (error) {
    return error;
  }
});

app.post("/cars", async (req, res) => {
  try {
    const cars = await addCar(req.body);
    res.json(cars);
  } catch (error) {
    return error;
  }
});

app.delete("cars/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const car = await deleteCar(id, uid);
    res.json(car);
  } catch (error) {
    return error;
  }
});

app.put("cars/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  try {
    const car = await updateCar(id, body, uid);
    res.json(car);
  } catch (error) {
    return error;
  }
});

app.get("/testcars", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM cars");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

app.get("*", (req, res) => {
  res.status(404).send("Page nott found");
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