import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import { getPlates } from "../../redux/actions";

export function FoodTypes() {
  const statePlates = useSelector((state) => state.plates);
  const [allPlates, setAllPlates] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allPlates.length === 0) dispatch(getPlates());
    setAllPlates(statePlates);
  }, [statePlates]);

  const vegan = allPlates.filter((plate) => plate.type === "Vegan").length;
  const glutenFree = allPlates.filter(
    (plate) => plate.type === "Gluten Free"
  ).length;
  const vegetarian = allPlates.filter(
    (plate) => plate.type === "Vegetarian"
  ).length;
  const protein = allPlates.filter((plate) => plate.type === "Protein").length;
  const others = allPlates.filter((plate) => plate.type === "Others").length;

  const data = [
    ["Foods", "variety of dishes"],
    ["Gluten Free", glutenFree],
    ["Vegetarian", vegetarian],
    ["Vegan", vegan],
    ["Protein", protein],
    ["Others", others],
  ];

  const options = {
    title: "My plates",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
/*
    <div>
      {allPlates?.map((c) => {
        return <h1>{c.name}</h1>;
      })}
    </div>
*/
