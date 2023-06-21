import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Cost(props) {
  const [selectYear, setSelectYear] = useState("2023");

  const changeYear = (year) => {
    setSelectYear(year);
  };

  const filteredCost = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectYear} onChangeYear={changeYear} />
        <CostsDiagram costs={filteredCost} />
        <CostList costs={filteredCost} />
      </Card>
    </div>
  );
}

export default Cost;
