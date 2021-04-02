import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

//1. return시에 하나의 dom만 리턴할 수 있다.
//2. 변수선언은 let 혹은 const로만 해야함. (scope 문제)
//3. if 사용 불가능 -> 삼항연산자 (조건 ? 값(ture) : 값(false))
//4. 조건부 렌더링(조건 && 값(ture))
//5. css디자인
// -내부에 적는 방법
// -외부 파일에 적는 방법
// -라이브러리 사용(부트스트랩, componet-styled)
/*
let a = 10; //변수
const b = 20; //상수

const mystyle = {
  color: 'red',
};
*/

function App() {
  console.log('app실행됌');
  //let list = [1, 2, 3];

  //let number = 1; //상태 값아님
  const [number, setNumber] = useState(1); //React안에 hooks라이브러리(상태 값이 됌)

  const add = () => {
    setNumber(number + 1); //리액트한테 number 값 변경할께 라고 요청
    console.log('add', number);
  };

  //예제 두번째
  let sample = [
    { id: 1, name: '루피' },
    { id: 2, name: '나루토' },
    { id: 3, name: '초파' },
    { id: 4, name: '사이타마' },
  ];

  const [users, setUsers] = useState(sample); //레퍼런스 변경되야 동작!!

  const update = () => {
    setUsers([...sample, { id: 5, name: '우왁굳' }]);
  };
  //랜더링 시점 = 상태값 변경
  return (
    <div>
      {/*
      {css 내부에 적용}
      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다' : '10이 아닙니다.'}{' '}
      </div>
      {css 외부파일로 적용}
      <h1 className="box-style">헤딩태그 {b === 20 && '20입니다.'} </h1>
      <hr />
      */}

      {/*
      <div>{list.map((n) => n)}</div>
      {forEach을 쓸 경우에는 리턴값이 없어서 화면에 안보인다.}
      */}

      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>

      <Sub />

      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}

      <button onClick={update}>업데이트</button>
    </div>
  );
}

export default App;
