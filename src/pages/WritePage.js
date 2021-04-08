import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    //ListPage의 setPosts에 무엇을 담아야 함?
    let post = {
      id: 8,
      title: '인풋값 테스트',
    };
    //setPosts();
  };

  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요..." />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
