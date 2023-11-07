import "./ExpenseDate.css";

function ExpenseDate(props){
  const month = props.date.toLocaleString("ens-US", { month: "long" });
  const day = props.date.toLocaleString("ens-US", { day: "2-digit" });
  const year = props.date.getFullYear();
    return  <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    
}

export default ExpenseDate;
