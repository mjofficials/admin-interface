import React from "react";
import styled from 'styled-components'

const StyledSelect = styled.select`
  width: 8rem;
  @media(min-width: 768px){
  width: 100%;

}`;

const PipelineSelect = () => {
  return (
    <div>
      <StyledSelect className="form-select mb-3" aria-label="Default select example">
        <option value="0">Phase 1</option>
        <option value="1">Phase 2</option>
        <option value="2">Phase 3</option>
        <option value="3">Preclinical</option>
      </StyledSelect>
    </div>
  );
};

export default PipelineSelect;
