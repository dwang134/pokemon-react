import {Container, Form, Row, Col} from 'react-bootstrap'
import {useEffect} from 'react'

const HeroSection = ({pokemon, setPokemon}) => {

    useEffect(()=> {
    window.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        setPokemon(pokemon.filter((pokemon)=> pokemon.data.name.toLowerCase().includes(searchString)))

        // const filteredPokemon = pokemon.filter((pokemon) => {
        //     pokemon.data.name.toLowerCase().includes(searchString)

        // });
        // setPokemon(filteredPokemon);
    });
}, [])


  return (

    <Container className= 'd-flex flex-column justify-content-center align-items-center' style= {{height: '40vh'}}>
    <h1>PokéSearch</h1>
    <Container fluid>
        <Row className= 'justify-content-center'>
            <Col xs = {10} sm= {10} md= {10} lg= {6} xl = {6}>
                <Form className= 'mt-5'>
                <Form.Control type= 'name' id= 'searchBar' placeholder= 'enter a pokemon here!' ></Form.Control>
                </Form>
            </Col>
        </Row>
    </Container>
    </Container>

  )
}

export default HeroSection