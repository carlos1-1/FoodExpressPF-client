import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getOrder } from "../../redux/actions";

export function UserOrder() {
  const stateOrders = useSelector((state) => state.allOrders);
  const [allOrders, setallOrders] = useState([]);
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.allUsers);
  const [allUser, setallUser] = useState([]);

  useEffect(() => {
    if (allOrders.length === 0) dispatch(getOrder());
    setallOrders(stateOrders);

    if (allUser.length === 0) dispatch(getAllUser());
    setallUser(stateUser);
  }, [stateOrders]);

  const numberOrder = allOrders.length;
  const numberUsers = allUser.length;

  const data = [
    ["Element", "Amount", { role: "style" }],
    ["Users", numberUsers, "#b87333"],
    ["Orders", numberOrder, "color: #e5e4e2"],
  ];

  return (
    <div>
      <div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    </div>
  );
}
