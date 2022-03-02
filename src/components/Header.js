import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
       
      <Navbar variant='dark' bg='dark'>
      <Container className= 'd-flex justify-content-between align-items-center px-5 '>
      <Navbar.Brand href="/pokemon-react"><span className='fw-bold'>Poké</span><span>Search</span></Navbar.Brand>
        <Nav>
            <NavDropdown title='Sprites' id='nav-drop' menuVariant= 'dark'>
            <NavDropdown.Item >Official</NavDropdown.Item>
            <NavDropdown.Item >Default</NavDropdown.Item>
            <NavDropdown.Item >BW Animated</NavDropdown.Item>
            <NavDropdown.Item >Dream World</NavDropdown.Item>
            <NavDropdown.Item >Shiny</NavDropdown.Item>
            <NavDropdown.Item >Shiny Animted</NavDropdown.Item>
            <NavDropdown.Item >3D</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Generation' id='nav-drop' menuVariant= 'dark'>
            <NavDropdown.Item >Generation 1</NavDropdown.Item>
            <NavDropdown.Item >Generation 2</NavDropdown.Item>
            <NavDropdown.Item >Generation 3</NavDropdown.Item>
            <NavDropdown.Item >Generation 4</NavDropdown.Item>
            <NavDropdown.Item >Generation 5</NavDropdown.Item>
            <NavDropdown.Item >Generation 6</NavDropdown.Item>
            <NavDropdown.Item >Generation 7</NavDropdown.Item>
            <NavDropdown.Item >Generation 8</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
      </Navbar>
  )
}

export default Header