import logo from './logo.svg';
import './App.css';

//1. return시에 하나의 dom만 리턴할 수 있다.
//2. 변수선언은 let 혹은 const로만 해야함. (scope 문제)
//3. if 사용 불가능 -> 삼항연산자 (조건 ? 값(ture) : 값(false))
//4. 조건부 렌더링(조건 && 값(ture))
//5. css디자인
// -내부에 적는 방법
// -외부 파일에 적는 방법
// -라이브러리 사용(부트스트랩, componet-styled)

let a = 10; //변수
const b = 20; //상수

const mystyle = {
  color: 'red',
};

let list = [1, 2, 3];

function App() {
  return (
    <div>
      {/*css 내부에 적용*/}
      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다' : '10이 아닙니다.'}{' '}
      </div>
      {/*css 외부파일로 적용*/}
      <h1 className="box-style">헤딩태그 {b === 20 && '20입니다.'} </h1>
      <hr />
      <div>{list.map((n) => n)}</div>
      {/*forEach을 쓸 경우에는 리턴값이 없어서 화면에 안보인다. */}
    </div>
  );
}

export default App;
