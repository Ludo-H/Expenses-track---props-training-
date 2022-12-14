import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData}) => {

    const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    });

    const titleChangedHandler = (e)=>{
        setUserInput((prev)=>{return {...prev, enteredTitle : e.target.value}})
    };

    const amountChangeHandler = (e)=>{
        setUserInput((prev)=>{return {...prev, enteredAmount : e.target.value}})
    };

    const dateChangeHandler = (e)=>{
        setUserInput((prev)=>{return {...prev, enteredDate : e.target.value}})
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData = {
            title : userInput.enteredTitle,
            amount : userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        onSaveExpenseData(expenseData);
        setUserInput({enteredTitle : '', enteredDate : '', enteredAmount : ""})
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangedHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={userInput.enteredDate} min="2019-01-01" max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
