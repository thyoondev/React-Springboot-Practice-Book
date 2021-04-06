import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: gray;
`;

function Footer() {
  return (
    <>
      <FooterList>
        <ul>
          <li>사이트 맵 : 메인메뉴 등등</li>
          <li>오시는 길 : 구로디지털단지</li>
        </ul>
      </FooterList>
    </>
  );
}

export default Footer;
