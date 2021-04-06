import React from 'react';
import styled from 'styled-components';
import Login from '../pages/LoginPage';

const StyledTitleH1 = styled.h1`
  color: red;
  text-align: center;
`;
function Main() {
  return (
    <div>
      <StyledTitleH1>제목</StyledTitleH1>
      <Login />
    </div>
  );
}

export default Main;
