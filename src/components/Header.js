import React from 'react';
import styled from 'styled-components';

const StyleHeaderDiv = styled.div`
  height: 100px;
  border: 1px solid gray;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
`;
function Header() {
  return (
    <>
      <StyleHeaderDiv>
        <h1>리액트 공부</h1>
      </StyleHeaderDiv>
    </>
  );
}

export default Header;
