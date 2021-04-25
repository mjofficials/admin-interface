import React from "react";
import styled from "styled-components";
import DynamicBtn from "../HelperComponents/DynamicBtn/DynamicBtn";
import ListUsersTable from "./ListUsersTable/ListUsersTable";
const ListPostBody = styled.div`
  padding: 2rem 3rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const btnArr = [
  "Username",
  "Posts",
  "Posts(1M)",
  "Logins",
  "Member since",
  "Last Acive",
];

const ListUsers = () => {
  return (
    <ListPostBody>
      <h1 className="mb-3">ListUsers</h1>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          View user by Username
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ticker"
          aria-label="Enter ticker"
          aria-describedby="Enter ticker"
        />
        <div className="d-flex flex-wrap">
          {btnArr.map((btn, i) => (
            <DynamicBtn btnName={btn} key={i} />
          ))}
        </div>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Order by
        </label>
        {btnArr.map((btn, i) => (
          <DynamicBtn btnName={btn} key={i} />
        ))}
      </div>
      <ListUsersTable />
    </ListPostBody>
  );
};

export default ListUsers;
