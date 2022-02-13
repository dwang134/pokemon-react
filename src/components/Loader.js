import React from 'react'
import {Spinner} from 'react-bootstrap'


const Loader = () => {
  return (
    <div className= 'd-flex justify-content-center mt-5' style= {{width: '100vw'}}>
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
    </div>
  )
}

export default Loader