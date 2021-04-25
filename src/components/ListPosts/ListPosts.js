import React from "react";
import styled from "styled-components";
import DynamicBtn from "../HelperComponents/DynamicBtn/DynamicBtn";
import ListPostsTable from "./ListPostsTable/ListPostsTable";


const ListPostBody = styled.div`
  padding: 2rem 3rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const btnArr = ["View", "View All", "View posts with flags"];

const ListPosts = () => {
  return (
    <ListPostBody>
      <h1 className='mb-3'>ListPosts</h1>
      <div className="input-group mb-4">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          View posts by ticker
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
      <ListPostsTable />
    </ListPostBody>
  );
};

export default ListPosts;
