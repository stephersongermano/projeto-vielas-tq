import styled from "styled-components";

export const SearchStyle = styled.div`
  position: relative; 
  width: 70vw;
  height: 12vh;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchInput = styled.input`
  border: 1px solid;
  border-color: black;
  height: 5vh;
  width: 100%; 
  border-radius: 15px;
  padding: 15px;
  padding-left: 40px; 
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  position: absolute; 
  left: 10px; 
  height: 5vh; 
  display: flex;
  align-items: center;
`;
