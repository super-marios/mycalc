import React from 'react';
import styled from 'styled-components';

// components
import View from './components/view'
import Numbers from './components/numbers'

const AppWrapper = styled.div`
    background-color: #000;
    width: 250px;
    margin: 0 auto;
    font-size: 2em;
`

function App() {
    return (
        <AppWrapper>
            <View />
            <Numbers />
        </AppWrapper>
    );
}

export default App;
