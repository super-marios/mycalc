import React from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    color: #fff;
    height: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
    font-size: 45px;
    
`

const View = () => {
    return (
        <ViewStyle>
            <span>0</span>
        </ViewStyle>
    );
}

export default View;