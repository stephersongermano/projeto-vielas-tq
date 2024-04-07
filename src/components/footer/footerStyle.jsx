import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: #e5401b;
  display: flex;
  width: 100vw;
  height: 40vh;
`;

export const FooterVielas = styled.h1`
  flex: 1;
  max-width: 50%;
  color: #ffffff;
  justify-content: flex-end;
  padding: 2% 1.5% 0% 30%;
`;

export const FooterContainer = styled.div`
  flex: 1;
`;

export const FooterTags = styled.div`
  color: #000000;
  display: flex;
  align-items: center;
  flex-direction: row;
  max-height: 30%;
  padding-top: 5%;
  padding-bottom: 5%;

  .tag {
    padding-left: 5px;
    font-size: 2rem;
  }
`;

export const FooterLinks = styled.div`
  color: #000000;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 70%;

  text-align: left;
  font: normal normal normal 28px/41px;
  letter-spacing: 0px;
  opacity: 1;

  li {
    list-style-type: none;
  }

  a {
    font-size: 1.4rem;
    margin-bottom: 5px;
    text-decoration: none;
  }
`;
