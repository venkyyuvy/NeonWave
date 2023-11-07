import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // useState is a hook
  // state is managed separately for each component instance
  // useState returns the latest value as its first value
  // hence we are using const
  // given arg- props.title is used only when the useState is executed 
  // for the first time.
  const [title, setTitle] = useState(props.title);
  // console.log("inExpenseItem")
  // console.log(title)
  const clickHandler = () => {
    setTitle(`${title}!`);
    console.log(title);
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        {/* with {}, javascript snippets can be added */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
