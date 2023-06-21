import "./CostForm.css";
import React, { useState } from "react";

function CostForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nemeChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(Number(event.target.value) );
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costDate);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nemeChangeHandler} />
        </div>

        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" value={inputDate} onChange={dateChangeHandler} />
        </div>
        <button type="submit">Добавить расход</button>
        <button type="button" onClick={props.onCancellation}>
          Отмена
        </button>
      </div>
    </form>
  );
}

export default CostForm;
