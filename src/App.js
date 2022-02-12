import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Homepage from './pages/Homepage'

const App= ()=> {
  return (
    //version 6 syntax
    <BrowserRouter>
      <Container>
      <Routes>
          <Route exact path= "/" element= {<Homepage/>}/>
      </Routes>
      </Container>'
    </BrowserRouter>
  );
}

export default App;
