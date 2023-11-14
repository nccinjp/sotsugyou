import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "./logo.svg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';

export default function header(){
    return(
        
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand >
            <img
                className="logo-img"
                src={logo}
                width="30"
                height="30"
                alt="logo"
            /> Petie
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#UserInfo">User info</Nav.Link>
                    <Nav.Link href="#Log Out">Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    );
}


// import React from 'react';
// import Headerstyle from './headerstyle.css';

// const header = () => {
//     return (
//         <header>
//         </header>
//     )
// }

// export default header
