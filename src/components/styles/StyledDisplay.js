import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 20px;
  margin: 0 0 20px 0;
  border: 4px solid #333;
  border-radius: 20px;
  background: #000;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  @media screen and (max-width: 600px) {
    width: 50%;
    min-height: 10px;
    padding: 10px;
    margin: 0 0 10px 0;
    font-size: 0.6rem;
  }
`;
