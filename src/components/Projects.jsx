import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sportTxt from '../assets/images/sport-txt.png';
import pronet from '../assets/images/pronet.png';
import python from '../assets/images/python.png';
import bgchooser from '../assets/images/bg-chooser.png';
import tut from '../assets/images/tut-point.png';
import clock from '../assets/images/clock.png';
import light from '../assets/images/light.png';
import pet from '../assets/images/pet.png';

function Projects() {

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='projectsContainer' >
            <h1>Projects and Activities</h1>
            <div className="projects">
                <div className="column1" data-aos="fade-in">
                    <div className="projectsCol1">
                        <div className="card1">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={sportTxt} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Simple-TXT</Card.Title>
                                    <Card.Text>
                                        Developed a responsive website design using html, css and bootstrap for 9hrs using a given informations.
                                    </Card.Text>
                                    <Button className="button" href="https://sport-txt.vercel.app/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card2">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={pronet} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Pro-Net-Career</Card.Title>
                                    <Card.Text>
                                        Reinvented LinkedIn website's front-end part using Vite ReactJs for 7 days.
                                    </Card.Text>
                                    <Button className="button" href="https://pro-net-career-mocha.vercel.app/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="projectsCol2">
                        <div className="card3">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={tut} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Tutorials Point</Card.Title>
                                    <Card.Text>
                                        Cloned a given website using HTML and CSS for 4hrs given timeframe (Desktop View Only).
                                    </Card.Text>
                                    <Button className="button" href="https://tutorials-point.vercel.app/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card4">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={bgchooser} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Background Chooser</Card.Title>
                                    <Card.Text>
                                        Background chooser using jQuery (Desktop View Only).
                                    </Card.Text>
                                    <Button className="button" href="https://nzmamitag.github.io/Background-Chooser/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="column2" data-aos="fade-in">
                    <div className="projectsCol1">
                        <div className="card5">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={clock} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Clock</Card.Title>
                                    <Card.Text>
                                        Realtime clock using ReactJs (Desktop View Only).
                                    </Card.Text>
                                    <Button className="button" href="https://clock-chi-blond.vercel.app/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card6">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={python} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Python website</Card.Title>
                                    <Card.Text>
                                        Cloned Python website to practice CSS (Desktop View Only).
                                    </Card.Text>
                                    <Button className="button" href="https://nzmamitag.github.io/Python-Website/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="projectsCol2">
                        <div className="card7">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={light} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Lights on Lights off</Card.Title>
                                    <Card.Text>
                                        Created simple lights on lights off using ReactJS (Desktop View Only).
                                    </Card.Text>
                                    <Button className="button" href="https://light-ebon.vercel.app/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card8">
                            <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img className="cardImg" variant="top" src={pet} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>My Pet</Card.Title>
                                    <Card.Text>
                                        Created simple pet naming using ReactJs.
                                    </Card.Text>
                                    <Button className="button" href="https://pet-roan.vercel.app/" target='_blank'>See Demo</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <p>More comming soon....</p>
        </div>
    )
}

export default Projects;