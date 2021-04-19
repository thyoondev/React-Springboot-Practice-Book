import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = (props) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const sumitBook = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book), //자바스크립트 오브젝트를 json으로 변경해서 던져주기
    })
      .then((res) => {
        console.log('1', res);
        if (res.status === 201) {
          return res.json();
        }
        return null;
      })
      .then((res) => {
        if (res !== null) {
          props.history.push('/');
        } else {
          alert('등록에 실패하였습니다.');
        }
        console.log('2', res);
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
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>저자</Form.Label>
          <Form.Control
            type="text"
            placeholder="저자 입력"
            name="author"
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          글쓰기
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
