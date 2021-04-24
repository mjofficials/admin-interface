import React from "react";
import PipelineTableRow from "./PipelineTableRow";
import styled from "styled-components";
import PipelineTableStage from "./PipelineTableStage";
import PipelineTableStageData from "./PipelineTableStageData";

const PipelineTableRowDiv = styled.div`
  width: 100%;
  position: relative;
  left: 1%;
`;

const PipelineTable = () => {
  return (
    <PipelineTableRowDiv className="d-flex row align-items-start justify-content-between">
      {/* Name Table */}
      <table className="col col-lg-2 table-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <PipelineTableRow />
          <PipelineTableRow />
          <PipelineTableRow />
          <PipelineTableRow />
          <PipelineTableRow />
        </tbody>
      </table>
      {/* Diseases Table */}
      <table className="col col-lg-4 table-primary">
        <thead>
          <tr>
            <th scope="col">Disease</th>
          </tr>
        </thead>
        <tbody>
          <PipelineTableRow />
          <PipelineTableRow />
          <PipelineTableRow />
          <PipelineTableRow />
          <PipelineTableRow />
        </tbody>
      </table>
      {/* Stage Table */}
      <div className="col-12 col-lg-6">
        <PipelineTableStage />
        <PipelineTableStageData />
        <PipelineTableStageData />
        <PipelineTableStageData />
        <PipelineTableStageData />
      </div>
    </PipelineTableRowDiv>
  );
};

export default PipelineTable;
