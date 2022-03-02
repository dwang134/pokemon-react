import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledCard = styled(Card)`
&:hover {
  transform: scale(1.1);
}
`;

const Pokemon = ({pokemon}) => {

  return (
    <>
      {/* <Card className= 'my-3 p-3 rounded text-center shadow mb-5 bg-white'> */}
      <StyledCard className= 'my-3 p-3 rounded text-center shadow mb-5 bg-white' style= {{border: 'none'}}>
        <Link to={`/pokemon-react/pokemon/${pokemon.id}`}>
          <Card.Img 
          style= {{width: '8rem'}}
          src= {pokemon.sprites.other["official-artwork"].front_default} 
          variant= 'top'
          />
        </Link>
        <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
        <Link to={`/pokemon-react/pokemon/${pokemon.id}`} className= 'card-link' style= {{textDecoration: 'none'}}>
            <Card.Title>
              <blockquote className= 'blockquote text-dark'>
                #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </blockquote>
            </Card.Title>
        </Link>
        </Card.Body>
      </StyledCard>
    </>
  )
}

export default Pokemon