import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledH1 = styled.h1`
  width: 75%;
  position: relative;
  top: 25%;
  text-align: center;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <StyledH1>
        Welcome to the Adimn Interface Homepage, where you can add-stocks,
        list-stocks, list-posts and list-users
      </StyledH1>
    </StyledDiv>
  );
};

export default HomePage;
