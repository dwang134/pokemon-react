import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, Row, Col, Navbar} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'

import Loader from '../components/Loader'

const PokemonPage = () => {

  const [pokemonDetails, setPokemonDetails]= useState()
  const [loading , setLoading]= useState(true)
  const {id} = useParams();

  const getPokemon = async (id) =>{
    console.log(id);
    const details = await getPokemonData(id);
    console.log(details);
    setPokemonDetails(details.data);
    setLoading(false);
  }

  //get specific pokemon and return it
  const getPokemonData = async (id) =>{
    //look at api documentation
    const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  }


  useEffect(()=> {
      getPokemon(id);
  }, []) 


  return (
   <div>
      {loading? (
        <Loader/> 
      ): (
        <Row>
          <Col xs= {12} sm= {12} md= {12} lg= {12} xl = {12}>
            <Card className= 'p-3 rounded text-center shadow mb-5 bg-white' style= {{border: 'none'}}>
              <Link to= {`/pokemon/${pokemonDetails.id}`}>
              <Card.Img style=  {{width: '15rem'}} src= {pokemonDetails.sprites.other["official-artwork"].front_default} variant= 'top'/>
              </Link>
              <Card.Body className= {`${pokemonDetails.types[0].type.name} rounded text-white`} />
              <Link to= {`/pokemon/${pokemonDetails.id}`} className= 'link-name text-dark fs-2'  style= {{textDecoration: 'none'}}>
                <Card.Title as= 'div'>
                  <strong>
                    #{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
                  </strong>
                </Card.Title>
              </Link>
            </Card>
          </Col>
          <Col xs= {12} sm= {12} md= {12} lg= {12} xl = {12}>
            <Card className= 'my-3 p-3 rounded text-center shadow mb-5 bg-white' style= {{border: 'none'}}> 
            <Card.Body>
              <Card.Text>
                <Row>
                  {pokemonDetails.types.map(t => (
                    <Col key= {t.type.name}>
                      <div className={`${t.type.name} rounded px-4 py-1`}>
                      {t.type.name.toUpperCase()}
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col>
                  <Card.Img style={{width: '15rem'}} src= {pokemonDetails.sprites.front_default}></Card.Img>
                  <Card.Text>Normal Form</Card.Text>
                  </Col>
                  <Col>
                  <Card.Img style={{width: '15rem'}} src= {pokemonDetails.sprites.front_shiny}></Card.Img>
                  <Card.Text>Shiny Form</Card.Text>
                  </Col>
                </Row>
                <Row className= 'mt-4'>
                <Col xs= {12} sm= {12} md= {12} lg= {12} xl = {12}>
                <Navbar style= {{border: '2px solid black'}} expand="xl" variant="light" bg="light" className= 'rounded justify-content-center'>
                  <Navbar.Brand> Abilities</Navbar.Brand> 
                  </Navbar>
                </Col>
                </Row>
                <Row className='text-center mt-4'>
                  {pokemonDetails.abilities.map(a => (
                      <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                          <div className={`rounded px-4 py-1`}>
                              {a.ability.name.toUpperCase()}
                          </div>
                      </Col>
                  ))}
              </Row>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      )
      }
   </div>
  )
}

export default PokemonPage