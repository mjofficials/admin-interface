import React from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import styled from "styled-components";
import Pipeline from "./Pipeline/Pipeline";
import Tags from "./Tags/Tags";

const StockFormBody = styled.div`
  padding: 2rem 1.5rem;
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const AddStocksPage = () => {
  return (
    <StockFormBody>
      <div>
        <h1>Add Stocks Page</h1>
      </div>
      {/* Cards with tabs component */}
      <div className="card-tabs ">
        {/*Cards navigation*/}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#tab-top-1"
              className="nav-link active"
              data-bs-toggle="tab"
            >
              Basic Info
            </a>
          </li>
          <li className="nav-item">
            <a href="#tab-top-2" className="nav-link" data-bs-toggle="tab">
              Pipeline
            </a>
          </li>
          <li className="nav-item">
            <a href="#tab-top-3" className="nav-link" data-bs-toggle="tab">
              Tags
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {/*Content of Basic info */}
          <div id="tab-top-1" className="card tab-pane active show">
            <div className="card-body">
              <h1 className="mb-3">Add/Edit stock</h1>
              <BasicInfo />
            </div>
          </div>
          {/*Content of Pipeline*/}
          <div id="tab-top-2" className="card tab-pane">
            <div className="card-body">
              <h1 className="mb-3">Pipeline</h1>
              <Pipeline />
            </div>
          </div>
          {/*Content of Tags*/}
          <div id="tab-top-3" className="card tab-pane">
            <div className="card-body">
              <h1 className="mb-3">Tags</h1>
              <Tags />
            </div>
          </div>
          {/*Content of card #4*/}
          <div id="tab-top-4" className="card tab-pane">
            <div className="card-body">
              <div className="card-title">Content of tab #4</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, alias aliquid distinctio dolorem expedita, fugiat hic
                magni molestiae molestias odit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StockFormBody>
  );
};

export default AddStocksPage;
