import styled from "styled-components";

const NavbarStyled = styled.div`
  background: #4761b4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
`;

NavbarStyled.NavbarLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

NavbarStyled.NavbarSign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
`;

NavbarStyled.NavbarTitle = styled.h1`
  width: 700px;
  text-align: left;
  padding-left: 15px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

NavbarStyled.NavbarMenu = styled.div`
  text-align: center;
  margin-left: 1rem;
  position: center;
`;

export default NavbarStyled;
