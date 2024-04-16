import styled from "styled-components";

export const WrapperCartStyled = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const DivCart = styled.div`
    width: 100%;
    height: 100%;
`;

export const H1 = styled.h1`
    text-align: left;
    font-size: 22px;
`;

export const Span = styled.span`
    text-align: left;
    font-size: 16px;
`;

export const WrapperItems = styled.div`
    width: 100%;
    border: 1px solid gray;
    margin: 30px 0;
    display: flex;
    flex-wrap: wrap;
    padding: 25px; 
`;

export const Img = styled.img`
    width: 25%;
    object-fit: cover;
`;

export const ImgDescription = styled.div`
    width: 75%;
`;

export const Table = styled.table`
    width: 100%;
    padding-left: 20px;
`;

export const Td1 = styled.td`
    width: 30%;
    vertical-align: text-top;
    font-size: 16px;
`;

export const Td2 = styled.td`
    width: 70%;
    vertical-align: text-top;
    font-size: 16px;
`;

export const Td3 = styled.td`
    height: 50px;
    vertical-align: text-top;
    font-size: 16px;
`;

export const Link = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

export const SelectItem = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const WrapperBuy = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
`;

export const ButtonBuy = styled.input`
    background-color: #4761B4;
    color: white;
    font-weight: 700;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    padding: 8px;
    text-transform: uppercase;
    cursor: pointer;
`;