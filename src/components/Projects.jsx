import React, { useEffect }from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import canIUse from '../assets/images/canIUse.png';
import python from '../assets/images/python.png';
import bgchooser from '../assets/images/bg-chooser.png';
import cookie from '../assets/images/cookie.png';
import tut from '../assets/images/tut-point.png';

function Projects() {

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='projectsContainer' >
            <h1>Projects</h1>
            <div className="projects">
                <div className="column1" data-aos="fade-in">
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src="https://www.thoughtco.com/thmb/o8ytjuR8vXInybPA6OQ7SSw-cw0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogger.svg-57f268d63df78c690fe5d003.png" />
                        <Card.Body className='cardBody'>
                            <Card.Title>Simple HTML Blogger</Card.Title>
                            <Card.Text>
                                Simple HTML blogger using HTML.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Blogger/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src={canIUse} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Can I use website</Card.Title>
                            <Card.Text>
                                Cloned Can I use website to practice CSS.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Can-I-Use-Website-Clone/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src={python} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Python website</Card.Title>
                            <Card.Text>
                                Cloned Python website to practice CSS.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Python-Website/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src={bgchooser} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Background Chooser</Card.Title>
                            <Card.Text>
                                Background chooser using jQuery.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Background-Chooser/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="column2" data-aos="fade-in">
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src={cookie} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Fortune Cookie</Card.Title>
                            <Card.Text>
                                Fortune cookie using jQuery (hover to see).
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Fortune-cookie/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src={tut} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Tutorials Point</Card.Title>
                            <Card.Text>
                                Cloned tutorials point website using HTML and CSS.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/tutorials-point/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src="https://www.thoughtco.com/thmb/o8ytjuR8vXInybPA6OQ7SSw-cw0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogger.svg-57f268d63df78c690fe5d003.png" />
                        <Card.Body className='cardBody'>
                            <Card.Title>Simple HTML Blogger</Card.Title>
                            <Card.Text>
                                Simple HTML blogger using HTML.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Blogger/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                    <Card className="cardContainer" style={{ width: '18rem' }} data-aos="fade-in">
                        <Card.Img className="cardImg" variant="top" src="https://www.thoughtco.com/thmb/o8ytjuR8vXInybPA6OQ7SSw-cw0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogger.svg-57f268d63df78c690fe5d003.png" />
                        <Card.Body className='cardBody'>
                            <Card.Title>Simple HTML Blogger</Card.Title>
                            <Card.Text>
                                Simple HTML blogger using HTML.
                            </Card.Text>
                            <Button className="button" href="https://nzmamitag.github.io/Blogger/" target='_blank'>See Demo</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Projects;