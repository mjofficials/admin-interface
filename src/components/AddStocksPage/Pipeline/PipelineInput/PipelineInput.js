import React from "react";
import styled from 'styled-components'

const StyledInput = styled.input`
width: 6rem;
@media(min-width: 768px){
  width: 100%;

}
`;
const DynamicInput = ({ id }) => {
  return (
    <>
      <StyledInput
        type="text"
        className="form-control mb-3"
        placeholder=""
        aria-label=""
        aria-describedby="basic-addon1"
      />
    </>
  );
};

export default DynamicInput;
