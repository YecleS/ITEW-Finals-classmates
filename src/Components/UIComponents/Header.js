import React from 'react';
import '../Styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar className='header'>
      <Container className='header__container'>
        <Navbar.Brand href="#home" className='header__logo'>Ducati</Navbar.Brand>
          <Nav>
            <Nav.Link href="#background" className='header__link'>Background</Nav.Link>
            <Nav.Link href="#products" className='header__link'>Products</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}
