const db = require("../db/config");
//makenotenote, notenotemodeltypetype, vdetails, notenoteyear, order_iep, disabiliy, is_default, uid, due_date 

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
    return { status: true, payload: note };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addNote = async (note) => {
  const { makenote, notemodeltype, vdetails, noteyear, order_iep, details, is_default, uid, due_date } =
    note;
  try {
    const query =
      "INSERT INTO notes (makenote, notemodeltype, vdetails, noteyear, order_iep, details, is_default, uid, due_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
    const newNote = await db.one(query, [
      makenote,
      notemodeltype,
      vdetails,
      noteyear,
      order_iep,
      details,
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
  const { makenote, notemodeltype, vdetails, noteyear, order_iep, details, is_default, due_date } = body;
  const queryOne = "SELECT * FROM notes WHERE uid=$1 AND id=$2";
  const authCheck = await db.any(queryOne, [uid, id]);
  if (authCheck.length) {
    try {
      const query =
        "UPDATE notes SET makenote=$1, notemodeltype=$2, vdetails=$3, noteyear=$4, order_iep=$5, details=$6, is_default=$7,due_date=$8, uid=$9  WHERE id=$10 RETURNING *";
      const updatedNote = await db.one(query, [
        makenote,
        notemodeltype,
        vdetails,
        noteyear,
        order_iep,
        details,
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

module.exports = { getAllNotes, getNote, addNote, deleteNote, updateNote };
