import styled from "styled-components";

export const WrapperGetItemStyled = styled.div`
    display:flex;
    justify-content: center;
    padding: 50px;
`;

export const Img = styled.img`
    width: 40%;
    max-width: 600px;
    max-height: 250px;
    object-fit: cover;
`;

export const DivDescription = styled.div`
    width: 60%;
    max-width: 500px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PictureName = styled.h1`
    text-align: left;
    font-size: 22px;
    margin-top: -10px;
`;

export const PictureDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
`;

export const Photographer = styled.span`
    font-size: 18px;
    font-weight: 400;
`;

export const LinkPhotographer = styled.a`
    font-size: 18px;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
    color: #e5401b;
`;

export const PurchaseOptions = styled.div`
    width: 100%;
`;

export const InputPurchase = styled.input`
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 10px;

    &:checked {
        background-color: #E5401B;
    }
`;

export const ButtonBuy = styled.input`
    width: fit-content;
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