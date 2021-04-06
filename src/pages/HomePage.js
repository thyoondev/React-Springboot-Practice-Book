import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../home/Home';

const HomePage = () => {
  //http 요청 (fetch)

  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);

  //빈 배열 한번만 실행
  useEffect(() => {
    //다운로드 가정 = fetch(비동기)
    let data = [
      { id: 1, title: '오늘 날씨', content: '맑음' },
      { id: 2, title: '오늘 황사', content: '없음' },
      { id: 3, title: '미세먼지 주의', content: '중국발 황사' },
    ];

    //다운로드 전이라 빈데이터 들어감
    setBoards([...data]);
  }, []);
  return (
    <div>
      <Header />
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
