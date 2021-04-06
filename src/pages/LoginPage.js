import React from 'react';
import styled from 'styled-components';

const StyleLoginDiv = styled.div`
  height: 300;
  border: 2px solid blue;
`;
const Login = (props) => {
  console.log(props);
  console.log(props.match.params.id);

  return (
    <div>
      <StyleLoginDiv>
        <ul>
          <li>아이디 : </li>
          <li>비밀번호 : </li>
        </ul>
        <button onClick={() => props.history.goBack()}>뒤로 가기</button>
      </StyleLoginDiv>
    </div>
  );
};

export default Login;
