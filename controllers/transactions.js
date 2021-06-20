const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");
// /transactions/
transactions.get("/", (req, res) => {

  res.json(transactionsArray);
  console.log('get transactions')
});

// const path = 'http://localhost:3001      /transactions    ?arrayId=25'
// GET /transactions ----- arrayId=25
// GET /transactions/banana ----- arrayId=25

transactions.get("/:transIdx", (req, res) => {
  // console.transaction(req.params);
  const { transIdx } = req.params;
  const transaction = transactionsArray[transIdx];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

// POST = /transactions
transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newIdx = transactionsArray.length - 1;
  // res.redirect("/");
  res.json(transactionsArray[newIdx]);
  // res.json(transactionsArray);
});

// PUT - update action - /transactions/:id - put has a body
transactions.put("/:transIdx", (req, res) => {
  const { transIdx } = req.params;
  const { body } = req;
  transactionsArray[transIdx] = body;
  res.json(transactionsArray[transIdx]);
}); 

// DELETE - destroy action - /transactions/:id
transactions.delete("/:transIdx", (req, res) => {
  const { transIdx } = req.params; 
  const deletedTransaction = transactionsArray.splice(transIdx, 1);
  res.json(deletedTransaction[0]);
})

module.exports = transactions; 


