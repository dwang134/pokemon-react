import React from 'react'
import {Spinner} from 'react-bootstrap'


const Loader = () => {
  return (
    <div className= 'd-flex justify-content-center mt-5' style= {{width: '100vw'}}>
        <figure class="text-center">
        <blockquote class="blockquote">
            <p className= "fs-2">Fetching Pokemon...</p>
        </blockquote>
                <Spinner className='spinner-border spinner-border-lg text-primary' role= 'status' style= {{height: '10vh', width: '10vh'}}>
                </Spinner>
        <figcaption class="blockquote-footer mt-3">
            Give it a moment please
        </figcaption>
        </figure>
    </div>
  )
}

export default Loader