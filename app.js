// DEPENDENCIES
const cors = require("cors");
const express = require("express");
// CONFIGURATION
const app = express();
// const notesController = require("./controllers/notesController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES

// app.use("/notes", notesController);

app.get("/", (req, res) => {
  res.send("LEND Parent Support Group Resource Site");
});


const db = require("./db/config.js");



const getAllNotes = async (uid) => {
  try {
    const query = "SELECT * FROM notes WHERE uid=$1";
    const allNotes = await db.any(query, uid);
    return { status: true, payload: allNotes };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const getNote = async (id, uid) => {
  try {
    const query = "SELECT * FROM notes WHERE id=$1 and uid=$2";
    const note = await db.one(query, [id, uid]);
    return {status: true, payload: note};
  } catch (error) {
    return {status: false, payload: error};
  }
};

const addNote = async (note) => {
  const {makenote, notemodeltype, vdetails, noteyear, order_iep, disabiliy, is_default, uid, due_date } =
    note;
  try {
    const query =
      "INSERT INTO notes (makenote, notemodeltype, vdetails, noteyear, order_iep, disabiliy, is_default, uid, due_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
    const newNote = await db.one(query, [
      makenote,
      notemodeltype,
      vdetails,
      noteyear,
      order_iep,
      disabiliy,
      is_default,
      uid,
      due_date,
    ]);
    return { status: true, payload: newNote };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteNote = async (id, uid) => {
  try {
    const query = "DELETE FROM notes WHERE id=$1 AND uid=$2 RETURNING *";
    const deletedNote = await db.one(query, [id, uid]);
    return { status: true, payload: deletedNote };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateNote = async (id, body, uid) => {
  const { makenote, notemodeltype, vdetails, noteyear, order_iep, disabiliy, is_default, due_date } = body;
  const queryOne = "SELECT * FROM notes WHERE uid=$1 AND id=$2";
  const authCheck = await db.any(queryOne, [uid, id]);
  if (authCheck.length) {
    try {
      const query =
        "UPDATE notes SET makenote=$1, notemodeltype=$2, vdetails=$3, noteyear=$4, order_iep=$5, disabiliy=$6, is_default=$7,due_date=$8, uid=$9  WHERE id=$10 RETURNING *";
      const updatedNote = await db.one(query, [
        makenote,
        notemodeltype,
        vdetails,
        noteyear,
        order_iep,
        disabiliy,
        is_default,
        due_date,
        uid,
        id,
      ]);
      return { status: true, payload: updatedNote };
    } catch (error) {
      return { status: false, payload: error };
    }
  } else {
    return { status: false, payload: "user doesn't match" };
  }
};

app.get("notes/", async (req, res) => {
  const uid = req.query.uid;
  try {
    const allnotes = await getAllNotes(uid);
    res.json(allnotes);
  } catch (error) {
    return error;
  }
});


app.get("notes/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const note = await getNote(id, uid);
    res.json(note);
  } catch (error) {
    return error;
  }
});

app.post("/notes", async (req, res) => {
  try {
    const notes = await addNote(req.body);
    res.json(notes);
  } catch (error) {
    return error;
  }
});

app.delete("notes/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const note = await deleteNote(id, uid);
    res.json(note);
  } catch (error) {
    return error;
  }
});

app.put("notes/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  try {
    const note = await updateNote(id, body, uid);
    res.json(note);
  } catch (error) {
    return error;
  }
});

app.get("/testnotes", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM notes");
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
// // const notesController = require("./controllers/notesController");

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON

// // ROUTES

// // app.use("/notes", notesController);

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