import React from 'react';
import styled from 'styled-components';

const NumberStyle = styled.div`
    color: #fff;
    padding: 20px 10px;
    
`
const Rows = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 3px 0;
`

const Btn = styled.span`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
`

const LightGrayBtn = styled(Btn)`
    background-color: #A5A5A5;
    color: #000;
`

const DarkGrayBtn = styled(Btn)`
    color: #fff;
    background-color: #333232;
`

const OrangeBtn = styled(Btn)`
    background-color: #FF9E08;
    color: #fff;
`

const Numbers = () => {
    const eventHandler = (e) => {
        let txt = e.target.textContent; // returns a string

        console.log(txt)
    }

    return (
        <NumberStyle>
            <Rows>
                <LightGrayBtn onClick={(e) => eventHandler(e)}>AC</LightGrayBtn>
                <LightGrayBtn onClick={(e) => eventHandler(e)}>+/-</LightGrayBtn>
                <LightGrayBtn onClick={(e) => eventHandler(e)}>%</LightGrayBtn>
                <OrangeBtn onClick={(e) => eventHandler(e)}>&divide;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>7</DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>8</DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>9</DarkGrayBtn>
                <OrangeBtn onClick={(e) => eventHandler(e)}>&times;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>4</DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>5</DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>6</DarkGrayBtn>
                <OrangeBtn onClick={(e) => eventHandler(e)}>&minus;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>1</DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>2</DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>3</DarkGrayBtn>
                <OrangeBtn onClick={(e) => eventHandler(e)}>&#43;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>0</DarkGrayBtn>
                <DarkGrayBtn></DarkGrayBtn>
                <DarkGrayBtn onClick={(e) => eventHandler(e)}>.</DarkGrayBtn>
                <OrangeBtn onClick={(e) => eventHandler(e)}>&#x3d;</OrangeBtn>
            </Rows>
        </NumberStyle>
    );
}

export default Numbers;