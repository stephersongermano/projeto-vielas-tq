import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background: #e5401b;
  display: flex;
  width: 100vw;
  height: 40vh;
`;

export const FooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const FooterVielas = styled.div`
  flex: 1;
  display: flex;
  padding-top: 2.5%;
  padding-right: 5%;
  justify-content: flex-end;

  h1 {
    max-width: 50%;
    color: #ffffff;
  }
`;

export const FooterTags = styled.div`
  flex: 1;
  color: #000000;
  display: flex;
  justify-content: center;
  justify-items: center;
  max-height: 30%;
  padding-top: 2.5%;

  .tag {
    padding-left: 5px;
    font-size: 2rem;
  }
`;

export const FooterLinks = styled.div`
  flex: 2;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  max-height: 70%;
  padding-right: 30vw;
  padding-top: 2%;

  li {
    list-style-type: none;
  }

  a {
    margin-bottom: 5px;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    font-family: "Space Mono", sans-serif;
  }
`;
