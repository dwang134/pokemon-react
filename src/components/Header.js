import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
        <Navbar variant="dark" bg="dark">
            <Container fluid>
            <Navbar.Brand href="/"><span className='fw-bold'>Pokémon</span><span> React!</span></Navbar.Brand>
            </Container>
        </Navbar>
  )
}

export default Header