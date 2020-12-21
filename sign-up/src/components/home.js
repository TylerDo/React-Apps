import React from 'react';
import styled from 'styled-components';

const Home = ({handleLogout}) => {
    return (
        <Container>
            <nav>
                <h1>
                    Welcome!
                <button onClick={handleLogout}>
                    Logout
                </button>
                </h1>
            </nav>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Home;