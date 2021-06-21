const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");
// /transactions/
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
  console.log("get transactions");
});

transactions.get("/:transIdx", (req, res) => {
  const { transIdx } = req.params;
  const transaction = transactionsArray[transIdx];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newIdx = transactionsArray.length - 1;
  // res.redirect("/");
  res.json(transactionsArray[newIdx]);
  // res.json(transactionsArray);
});

transactions.put("/:transIdx", (req, res) => {
  const { transIdx } = req.params;
  const { body } = req;
  transactionsArray[transIdx] = body;
  res.json(transactionsArray[transIdx]);
});

transactions.delete("/:transIdx", (req, res) => {
  const { transIdx } = req.params;
  const deletedTransaction = transactionsArray.splice(transIdx, 1);
  res.json(deletedTransaction[0]);
});

module.exports = transactions;

// This criterion is linked to a Learning OutcomeAPI - RESTful Routes
// 5 RESTful fully functioning routes:
// - index
// - show
// - create
// - update
// - delete
