import Cost from "./components/Cost/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 15),
    description: "Холодильник",
    amount: 999.99,
  },

  {
    id: "c2",
    date: new Date(2022, 2, 21),
    description: "Ноутбук",
    amount: 1275.78,
  },

  {
    id: "c3",
    date: new Date(2023, 2, 27),
    description: "Одежда",
    amount: 500.66,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Cost costs={costs} />
    </div>
  );
}

export default App;
