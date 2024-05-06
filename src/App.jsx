import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {

  return (
    <>
      {/* Router */}
      <Router>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" variant="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/" className='neds'><span className='letterN'>N</span>eds</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav><Link to='/' className='links'>Home</Link></Nav>
                <Nav><Link to='/aboutMe' className='links'>About Me</Link></Nav>
                <Nav><Link to='/projects' className='links'>Projects</Link></Nav>
                <Nav><Link to='/contactMe' className='links'>Contact Me</Link></Nav>
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
