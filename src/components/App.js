import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 40%;
`;

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;


const App = () => (
    <Container>
        <Wrapper>
            <Title>
                <span role="img" aria-label="Bolt">
                    ⚡
                </span>{' '}
                Urban Tribe Client
            </Title>
        </Wrapper>
    </Container>
);

export default App;
