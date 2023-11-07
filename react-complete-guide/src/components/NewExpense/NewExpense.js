import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openExpenseForm, setOpenExpenseForm] = useState(false);
  const expeseButtonClickHandler = (event) => {
    setOpenExpenseForm(true);
  };
  const onCancelExpenseHandler = (event) => {
    setOpenExpenseForm(false);
  };
  const expenseButton = (
    <div>
      <button type="button" onClick={expeseButtonClickHandler}>
        Add New Expense
      </button>
    </div>
  );
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOpenExpenseForm(false);
  };
  return (
    <div className="new-expense">
      {openExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelExpense={onCancelExpenseHandler}
        />
      ) : (
        expenseButton
      )}
    </div>
  );
};

export default NewExpense;
