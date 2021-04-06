import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

//Function 방식

const SyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//스타일확장
const SyledAddButton = styled(SyledDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <SyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </SyledDeleteButton>
      <h1>홈 : {number}</h1>
      <SyledAddButton user={user} onClick={() => setNumber(number + 1)}>
        숫자 증가
      </SyledAddButton>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
