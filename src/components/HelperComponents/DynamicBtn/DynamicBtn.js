import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  margin: 0.3rem ;
`;

const PipelineBtn = ({ btnName }) => {
  return (
    <div>
      <StyledBtn type="button" className="btn btn-secondary">
        {btnName}
      </StyledBtn>
    </div>
  );
};

export default PipelineBtn;
