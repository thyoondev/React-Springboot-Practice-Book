import { createRef, useRef, useState } from 'react';
import './App.css';
//1. return시에 하나의 dom만 리턴할 수 있다.
//2. 변수선언은 let 혹은 const로만 해야함. (scope 문제)
//3. if 사용 불가능 -> 삼항연산자 (조건 ? 값(ture) : 값(false))
//4. 조건부 렌더링(조건 && 값(ture))
//5. css디자인
// -내부에 적는 방법
// -외부 파일에 적는 방법
// -라이브러리 사용(부트스트랩, componet-styled)

//useRef(디자인)
//dom을 변경할 때 사용
function App() {
  const myRef = useRef(null);
  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '꺽정' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          myRefs[0].current.style.color = 'blue';
          myRefs[1].current.style.color = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}> 박스 </div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
