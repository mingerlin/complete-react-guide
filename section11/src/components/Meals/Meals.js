import React, { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvaliableMeals from "./AvaliableMeals";

function Meals() {
  return (
    <Fragment>
      <MealSummary />
      <AvaliableMeals />
    </Fragment>
  );
}
export default Meals;
