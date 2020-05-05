import React from 'react';
import styled from 'styled-components';

const NumberStyle = styled.div`
    color: #fff;
    
`
const Rows = styled.div`
    display: flex;
    
`

const LightGrayBtn = styled.span`
    background-color: #A5A5A5;
    color: #000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
`

const DarkGrayBtn = styled.span`
    color: #fff;
    background-color: #333232;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
`

const OrangeBtn = styled.span`
    background-color: #FF9E08;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
`

const Numbers = () => {
    return (
        <NumberStyle>
            <Rows>
                <LightGrayBtn>AC</LightGrayBtn>
                <LightGrayBtn>+/-</LightGrayBtn>
                <LightGrayBtn>%</LightGrayBtn>
                <OrangeBtn>&divide;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn>7</DarkGrayBtn>
                <DarkGrayBtn>8</DarkGrayBtn>
                <DarkGrayBtn>9</DarkGrayBtn>
                <OrangeBtn>&times;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn>4</DarkGrayBtn>
                <DarkGrayBtn>5</DarkGrayBtn>
                <DarkGrayBtn>6</DarkGrayBtn>
                <OrangeBtn>&minus;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn>1</DarkGrayBtn>
                <DarkGrayBtn>2</DarkGrayBtn>
                <DarkGrayBtn>3</DarkGrayBtn>
                <OrangeBtn>&#43;</OrangeBtn>
            </Rows>
            <Rows>
                <DarkGrayBtn>0</DarkGrayBtn>
                <DarkGrayBtn></DarkGrayBtn>
                <DarkGrayBtn>.</DarkGrayBtn>
                <OrangeBtn>&#x3d;</OrangeBtn>
            </Rows>
        </NumberStyle>
    );
}

export default Numbers;