import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
  height: 300;
  border: 2px solid blue;
  background-color: green;
`;
function Login(props) {
  return (
    <div>
      <LoginBox>
        <ul>
          <li>아이디 : </li>
          <li>비밀번호 : </li>
        </ul>
      </LoginBox>
    </div>
  );
}

export default Login;
