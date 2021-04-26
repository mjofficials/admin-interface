import React from "react";
import styled from "styled-components";
import DynamicBtn from "../HelperComponents/DynamicBtn/DynamicBtn";
import ListStockTable from "./ListStockTable";

const ListStockBody = styled.div`
  padding: 2rem 1.5rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const buttonArr = ["Company Name", "Posts 1M", "Followers", "Last Updated"];

const ListStocks = () => {
  return (
    <ListStockBody>
      <h1 className="mb-3">ListStocks</h1>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Country
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="">United States</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Order by
        </label>
        {buttonArr.map((btn, i) => (
          <DynamicBtn btnName={btn} key={i} />
        ))}
      </div>
      <ListStockTable />
    </ListStockBody>
  );
};

export default ListStocks;
