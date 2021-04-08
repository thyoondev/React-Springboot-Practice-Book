import React, { useState } from 'react';
import styled from 'styled-components';

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1' },
    { id: 1, title: '내용2' },
    { id: 1, title: '내용3' },
    { id: 1, title: '내용4' },
    { id: 1, title: '내용5' },
    { id: 1, title: '내용6' },
    { id: 1, title: '내용7' },
  ]);

  const StyledItemBoxDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const StyledRemoveButton = styled.button`
    color: red;
  `;
  return (
    <div>
      <h1>리스트 페이지</h1>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} 제목 : {post.title}
          </div>
          <StyledRemoveButton>삭제</StyledRemoveButton>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
