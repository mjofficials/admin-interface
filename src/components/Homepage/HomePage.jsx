import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <h1>Homepage</h1>
    </StyledDiv>
  );
};

export default HomePage;
