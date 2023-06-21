import CostForm from "./CostForm";
import "./NewCost.css";
import React, { useState } from "react";

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const seveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancellationAddCost = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onCancellation={cancellationAddCost}
          onSaveCostData={seveCostDataHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
