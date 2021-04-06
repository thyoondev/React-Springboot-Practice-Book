import { useEffect, useState } from 'react';
import Third from './aa/Third';
import './App.css';
import Sub, { num } from './Sub';
//1. return시에 하나의 dom만 리턴할 수 있다.
//2. 변수선언은 let 혹은 const로만 해야함. (scope 문제)
//3. if 사용 불가능 -> 삼항연산자 (조건 ? 값(ture) : 값(false))
//4. 조건부 렌더링(조건 && 값(ture))
//5. css디자인
// -내부에 적는 방법
// -외부 파일에 적는 방법
// -라이브러리 사용(부트스트랩, componet-styled)

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드를 받고 (통신)
    let downloadData = 5; //가정
    setData(downloadData);
  };
  //실행시점 :
  //(1) App() 함수가 최초 실행될 때(App() 그림이 최초로 그려질 때)
  //(2) 상태 변수가 변경될 때(그게 dependencyList에 등록되어 있어야함)
  //(3) 의존리스트 관리를 할 수 있다.
  useEffect(() => {
    console.log('useEffect 실행됌');
    download();
  }, [search]);

  return (
    <div>
      Hello World!
      <br />
      useEffect : {num} 입니다.
      <br /> useState : {data}입니다.
      <button onClick={() => setData(data - 1)}>빼기</button>
      <button onClick={() => setData(data + 1)}>더하기</button>
      {search}
      <button onClick={() => setSearch(2)}>검색</button>
      <Sub />
      <Third />
    </div>
  );
}

export default App;
