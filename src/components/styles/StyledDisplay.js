import styled from 'styled-components'

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    items-align: center;
    width: 100%;
    min-height: 30px;
    padding: 20px;
    margin: 0 0 20px 0;
    border: 4px solid #333;
    border-radius: 20px;
    background: #000;
    color: ${props => props.gameOver ? 'red' : '#999'};
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
`