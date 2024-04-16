import styled from "styled-components";

export const NavbarStyled = styled.div`
  background: #4761b4;
  height: min(17vh, 70px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarTitle = styled.h1`
  flex: 2;
  width: 14vw;
  text-align: left;
  padding-left: 15px;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const NavbarLogin = styled.div`
  flex: 1;
  display: flex;
  color: #ffffff;

  p {
    flex: 1;
    font: normal normal normal 30px/45px;
  }
`;

export const NavbarMenu = styled.div`
  margin-left: 7vw;
`;
