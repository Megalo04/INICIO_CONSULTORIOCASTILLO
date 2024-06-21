import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <>
            <Header />
            <Container fluid style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
                <Main />
            </Container>
            <Footer />
        </>
    );
}

export default App;
