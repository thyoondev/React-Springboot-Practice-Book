import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 100px;
  border: 1px solid gray;
  text-align: center;
  background-color: yellow;
`;
function Header() {
  return (
    <>
      <HeaderBox>
        <h1>리액트 공부</h1>
      </HeaderBox>
    </>
  );
}

export default Header;
