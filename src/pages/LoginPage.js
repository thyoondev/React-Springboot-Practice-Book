import React from 'react';
import styled from 'styled-components';

const StyleLoginDiv = styled.div`
  height: 300;
  border: 2px solid blue;
`;
function Login(props) {
  return (
    <div>
      <StyleLoginDiv>
        <ul>
          <li>아이디 : </li>
          <li>비밀번호 : </li>
        </ul>
      </StyleLoginDiv>
    </div>
  );
}

export default Login;
