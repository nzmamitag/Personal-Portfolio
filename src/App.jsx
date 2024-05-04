import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./components/Home'));
const AboutMe = React.lazy(() => import('./components/AboutMe'));
const Projects = React.lazy(() => import('./components/Projects'));
const ContactMe = React.lazy(() => import('./components/ContactMe'));

function App() {

  return (
    <>
      {/* Router */}
      <Router>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" variant="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/" className='neds links'><span className='letterN'>N</span>eds</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href='/' className='links'>Home</Nav.Link>
                <Nav.Link href='/aboutMe' className='links'>About Me</Nav.Link>
                <Nav.Link href='/projects' className='links'>Projects</Nav.Link>
                <Nav.Link href='/contactMe' className='links'>Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Routes */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutMe' element={<AboutMe />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contactMe' element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
