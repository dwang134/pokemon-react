import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
        <Navbar expand="xl" variant="dark" bg="dark">
            <Container>
            <Navbar.Brand href="/"><span className='fw-bold'>Pokémon</span><span> React!</span></Navbar.Brand>
            </Container>
        </Navbar>
  )
}

export default Header