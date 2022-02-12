import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
//Components
import Pokemon from '../components/Pokemon'
import Loader from '../components/Loader'

const Homepage = () => {

    //empty array for upcoming pokemons
    const [pokemon, setPokemon]= useState([])
    //if its loading or not
    const [loading, setLoading]= useState(true)

    //push data into pokemon array
    const getPokemonList = async () => {
        let pokemonArray= [];
        //because pokemon id starts at 1 and get 151 pokemons
        for (let i= 1; i<= 151; i++){
            //dont alter original array directly
            pokemonArray.push(await getPokemonData(i));
        }

        //for examination 
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        //done 
        setLoading(false);
    }

    //get specific pokemon and return it
    const getPokemonData = async (id) =>{
        //look at api documentation
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(()=> {
        getPokemonList();
    }, []) //call only once when component is mounted


  return (
    <>
        {loading? (
            //loading icon
            <Loader/>
        ): (
            <Row>
                {/* map through pokemon */}
                {pokemon.map(p => (
                    <Col key= {p.data.name} xs={12} sm= {12} md = {4} lg= {4} xl= {4}>
                        <Pokemon pokemon= {p.data}/>
                    </Col>
                ))}
            </Row>
        )
        }
    </>
  )
}

export default Homepage