// import React, { useState } from "react";
// import "./App.css";
// import NewExpense from "./components/NewExpense/NewExpense";
// import Expense from "./components/Expenses/Expense";
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
// mongodb://localhost:27017/
const url = 'mongodb://localhost:27017/';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
const InitialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// const App = () => {

//   const [expenses, setExpenses] = useState(InitialExpenses);
//   const addExpenseHandler = (expense) => {
//     setExpenses((previousState) => [expense, ...previousState]);
//   };
//   return (
//     <div className="App">
//       <NewExpense onAddExpense={addExpenseHandler} />
//       <Expense expense={expenses} />
//     </div>
//   );
// };

// export default App;
