import styled from "styled-components";

export const WrapperLoginStyled = styled.div`
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const DivLoginStyled = styled.div`
  background: #4761B4;
  width:400px;
  height: 370px;
  padding: 35px;

  font-weight: 700;
  font-style: normal;
`;

export const Title = styled.h1`
  color:#FFFFFF;
  font-size:25px;
  justify-content: left;
  margin:20px 0 15px;
`;

export const InputEmail = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 50px;
`;

export const InputPassword = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 50px;
  margin-bottom: 15px;
`;

export const WrapperKeepMeConnected = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap:5px;
    font-size:14px;
    padding-left:30px;
    margin-bottom: 15px;
`;

export const WrapperButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const ButtonLogin = styled.button`
    width: 200px;
    background-color: #FFFFFF;
    border-radius: 25px;
    border: none;
    font-size: 25px;
    font-weight: 700;
    padding: 5px 40px;
    cursor: pointer;
    color: #E5401B;
    text-align: center;
    margin: 10px 0 20px;
`;

export const Span = styled.span`
    font-size: 12px;
`;

export const ForgotPassword = styled.a`
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;
`;
