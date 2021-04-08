import React, { useState } from 'react';
import styled from 'styled-components';

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
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

  const handleWrite = (e) => {
    e.preventDefault(); //form태그가 하라는 액션을 중지시킴
    //ListPage의 setPosts에 무엇을 담아야 함?
    setPosts([...posts, post]);
    setNo(no + 1);
  };

  const handleForm = (e) => {
    // computed property name 문법 (키값 동적할당)
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>리스트 페이지</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="sumit">글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} / 제목 : {post.title} / 내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
