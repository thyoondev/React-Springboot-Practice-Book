import styled from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
//1. return시에 하나의 dom만 리턴할 수 있다.
//2. 변수선언은 let 혹은 const로만 해야함. (scope 문제)
//3. if 사용 불가능 -> 삼항연산자 (조건 ? 값(ture) : 값(false))
//4. 조건부 렌더링(조건 && 값(ture))
//5. css디자인
// -내부에 적는 방법
// -외부 파일에 적는 방법
// -라이브러리 사용(부트스트랩, componet-styled)

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
