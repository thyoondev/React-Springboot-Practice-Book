import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Home from '../home/Home';

const HomePage = () => {
  //http 요청 (fetch)

  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

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
    setUser({ id: 1, username: 'ssar' });
  }, []);
  return (
    <div>
      <Nav />
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
    </div>
  );
};

export default HomePage;
