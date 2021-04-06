import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Title = styled.h1`
  color: red;
  text-align: center;
`;
function Main() {
  return (
    <div>
      <Title>제목</Title>
      <Login />
    </div>
  );
}

export default Main;
