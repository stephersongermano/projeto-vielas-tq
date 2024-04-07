import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #ffffff;
`;

export const HomeHashTags = styled.div`
  height: 45px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;

  h3 {
    padding: 5px;
    margin: 5px;
    text-align: left;
    text-decoration: underline;
    font-style: italic;
    letter-spacing: 0px;
    font-weight: 500;
  }
`;

export const HomeMiddle = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
`;

export const HomeMiddleDiv = styled.div`
  background: #4761b4;
  display: flex;
  flex-direction: column-reverse;
  align-items: space-between;
  height: 100%;
  width: 30vw;
  color: #ffffff;
  margin: 20px 15px 15px 50px;
  padding: 10px 5px 30px 10px;

  h1 {
    margin-left: 10px;
    margin-right: 60px;
    padding-bottom: 5%;
  }

  p {
    font-style: italic;
    font-size: medium;
    margin-left: 10px;
    margin-right: 60px;
  }
`;
