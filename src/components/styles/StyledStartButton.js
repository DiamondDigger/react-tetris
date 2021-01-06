import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-height: 30px;
  padding: 20px;
  margin: 0 0 20px 0;
  border: none;
  border-radius: 20px;
  background: #333;
  color: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 50%;
    min-height: 20px;
    padding: 10px;
    font-size: 0.6rem;
    justify-content: center;
  }
`;
