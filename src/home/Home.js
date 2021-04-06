import React from 'react';
import styled from 'styled-components';

//Function 방식

const SyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <SyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </SyledDeleteButton>
      <h1>홈 : {number}</h1>
      <button onClick={() => setNumber(number + 1)}> 숫자 증가 </button>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
