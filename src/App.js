import Nav from './components/Nav'
import AltNav from './components/Test'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import './components/Nav.css'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div>
      {/* <AltNav /> */}
      <Nav />
      <Container>
      <About />
      <br></br>
      <br></br>
      <br></br>
      <h3>Portfolio</h3>
      <br></br>
      <br></br>
      <Portfolio />
      <br></br>
      <br></br>
      <br></br>
      <h3>Blogs</h3>
      <br></br>
      <br></br>
      <Blogs />
      <br></br>
      <br></br>
      <br></br>
      </Container>
      </div>
  );
}

export default App;
