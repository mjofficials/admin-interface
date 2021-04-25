import React from "react";
import Pagination from "../HelperComponents/Pagination/Pagination";
import ListStockTableData from "../../Data/ListStockTableData.json";
import { Link } from "react-router-dom";

const ListStockTable = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Ticker</th>
              <th scope="col">Company name</th>
              <th scope="col">Post 1M</th>
              <th scope="col">Followers</th>
              <th scope="col">Status</th>
              <th scope="col">Last updated</th>
            </tr>
          </thead>
          <tbody>
            {ListStockTableData.liststocktabledata.map((tdata, index) => (
              <tr key={index}>
                <td>
                  <Link to="/addstocks">{tdata.ticker}</Link>
                </td>
                <td>{tdata.company_name}</td>
                <td>{tdata.posts1m}</td>
                <td>{tdata.followers}</td>
                <td>{tdata.status}</td>
                <td>{tdata.last_updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default ListStockTable;
