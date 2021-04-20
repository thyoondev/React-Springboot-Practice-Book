import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateForm = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: id,
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const sumitBook = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/book/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book), //자바스크립트 오브젝트를 json으로 변경해서 던져주기
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push('/book/' + id);
        } else {
          alert('책 수정에 실패하였습니다.');
        }
      });
  };

  return (
    <div>
      <h1>책 등록하기</h1>
      <Form onSubmit={sumitBook}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목 입력"
            onChange={onChange}
            name="title"
            value={book.title}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>저자</Form.Label>
          <Form.Control
            type="text"
            placeholder="저자 입력"
            name="author"
            onChange={onChange}
            value={book.author}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          글쓰기
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
