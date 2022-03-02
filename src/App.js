import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Homepage from './pages/Homepage'
import PokemonPage from './pages/PokemonPage'
import Header from './components/Header'

const App= ()=> {
  return (
    //version 6 syntax
    <BrowserRouter>
    <Header/>
      <Container>
      <Routes>
          <Route exact path= "/pokemon-react" element= {<Homepage/>}/>
          <Route path= '/pokemon-react/pokemon/:id' element= {<PokemonPage/>}/>
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
