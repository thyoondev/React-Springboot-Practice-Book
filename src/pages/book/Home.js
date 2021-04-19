import React, { useEffect, useState } from 'react';
import BookItem from '../../conponents/BookItem';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      }); //비동기 함수
  }, []);

  return (
    <div>
      <h1>책 리스트 보기</h1>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
