import React from 'react'
import {Spinner, Container} from 'react-bootstrap'


const Loader = () => {
  return (
    <Container fluid className= 'd-flex justify-content-center align-items-center mt-5' >
        <figure className='text-center'>
        <blockquote className='blockquote'>
            <p className= 'fs-2'>Fetching Pokemon...</p>
        </blockquote>
                <Spinner className='spinner-border spinner-border-lg text-primary' role= 'status' style= {{height: '10vh', width: '10vh'}}>
                </Spinner>
        <figcaption className='mt-3 text-secondary'>
            <small>Give it a moment please</small>
        </figcaption>
        </figure>
    </Container>
  )
}

export default Loader