import Image from "next/image";

import styled from "styled-components";

const Background = styled.div`
  height: 60px;
  width: 100%;
  padding: 12px 54px 12px 54px;
  background-color: #48355a;

  display: flex;
  align-items: center;
`;

const Header = () => (
  <Background>
    <Image
      src="../images/logo.svg"
      alt="Look it's the weather Logo"
      height={35}
      width={93}
    />
  </Background>
);

export default Header;
