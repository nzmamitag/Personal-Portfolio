import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMe.css';
import Me from '../assets/images/aboutMe.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import jquery from '../assets/images/jquery.png';
import bootstrap from '../assets/images/bootstrap.png';
import react from '../assets/images/react.png';
import reactbootstrap from '../assets/images/reactbootstrap.png';
import rwd from '../assets/images/rwd.png';
import ux from '../assets/images/ux.png';
import materialUI from '../assets/images/materialUI.png';
import java from '../assets/images/java.png';
import php from '../assets/images/php.png';
import express from '../assets/images/express.png';
import node from '../assets/images/nodejs.png';
import socket from '../assets/images/socket.png';
import codeigniter from '../assets/images/codeigniter.png';
import mvc from '../assets/images/mvc.png';
import mysql from '../assets/images/mysql.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import figma from '../assets/images/figma.png';
import blender from '../assets/images/blender.png';
import computer from '../assets/images/computer.png';
import capcut from '../assets/images/capcut.png';
import picsart from '../assets/images/picsart.png';
import office from '../assets/images/msoffice.png';
import Carousel from 'react-bootstrap/Carousel';
import sumtech1 from '../assets/images/sumtech1.jpg';
import sumtech2 from '../assets/images/sumtech2.jpg';
import sumtech3 from '../assets/images/sumtech3.jpg';
import sumtech4 from '../assets/images/sumtech4.jpg';
import sumtech5 from '../assets/images/sumtech5.jpg';
import sumtech6 from '../assets/images/sumtech6.jpg';
import sumtech7 from '../assets/images/sumtech7.jpg';
import sumtech8 from '../assets/images/sumtech8.jpg';
import intern1 from '../assets/images/intern1.jpg';
import intern2 from '../assets/images/intern2.jpg';
import intern3 from '../assets/images/intern3.jpg';
import intern4 from '../assets/images/intern4.jpg';
import vilage88 from '../assets/images/village88.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import webcert from '../assets/images/webcert.png';
import phpcert from '../assets/images/PHPCert.png';
import jscert from '../assets/images/JSCert.png';
import fecert from '../assets/images/Front-endcert.png';
function AboutMe() {

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <section className="section1">
                <div className="rightImage" data-aos="fade-left">
                    <img src={Me} alt="Me" />
                </div>
                <div className="leftAboutContainer" data-aos="fade-right">
                    <p>
                        Hi! I'm Neds Zamoranos Mamitag, an aspiring <strong>Web Designer and Frontend Developer.</strong> I graduated from the <i>University of the Cordilleras</i> in Baguio City, Benguet, with a Bachelor of Science in Information Technology. During college, I was exposed to Mobile App Development but encountered difficulty finding a job in web development after graduation. To gain experience, I worked as a technical support staff, focusing on hardware-related tasks like reformatting and building computers.
                    </p>
                    <p>
                        Fortunately, I discovered a free full-stack web development bootcamp called <strong>Village88</strong>, where I acquired essential skills and technologies for web development. I'm currently exploring my career path, debating whether to specialize in Frontend, Backend, or pursue Full Stack Development. While I aspire to become a Full Stack Developer, I value progressing step-by-step, understanding that a well-designed UI/UX is paramount. It ensures user retention, which is more critical than having a fully functional yet uninviting website.
                    </p>
                </div>
            </section>
            <section className='section2'>
                <div className="leftAboutSection2">
                    <h2>Skills and Technologies</h2>
                    <div className="technologies" data-aos="fade-in">
                        <div className="technologies1">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={js} alt="js" />
                            <img src={jquery} alt="jquery" />
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                        <div className="technologies1">
                            <img src={react} alt="react" />
                            <img src={reactbootstrap} alt="reactbootstrap" />
                            <img src={ux} alt="ux" />
                            <img src={rwd} alt="rwd" />
                            <img src={materialUI} alt="materialUI" />
                        </div>
                    </div>
                    <div className="technologies" data-aos="fade-in">
                        <div className="technologies1">
                            <img src={java} alt="java" />
                            <img src={php} alt="php" />
                            <img src={express} alt="express" />
                            <img src={node} alt="node" />
                            <img src={socket} alt="socket" />
                        </div>
                        <div className="technologies1">
                            <img src={codeigniter} alt="codeigniter" />
                            <img src={mvc} alt="mvc" />
                            <img src={mysql} alt="mysql" />
                            <img src={git} alt="git" />
                            <img src={github} alt="github" />
                        </div>
                    </div>
                    <div className="technologies" data-aos="fade-in">
                        <div className="technologies1">
                            <img src={figma} alt="figma" />
                            <img src={blender} alt="blender" />
                            <img src={computer} alt="computer" />
                            <img src={capcut} alt="capcut" />
                            <img src={picsart} alt="picsart" />
                        </div>
                        <div className="technologies1">
                            <img src={office} alt="office" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section3">
                <h2>Experience</h2>
                <div className="experience">
                    <div className="leftExperience" data-aos='fade-right'>
                        <h3>IT Support Staff <span className='date'>(September 2023 - March 2024)</span></h3>
                        <h4>Sumtech Enterprises, Baguio City</h4>
                        <ul>
                            <li>Fixed and satisfied 2 – 4 customer’s computer problems a day</li>
                            <li>Succeeded to find IT suppliers to win on bidding projects</li>
                            <li>Built a customer's computer unit with good cable management</li>
                            <li>Supervised interns on day-to-day activities</li>
                        </ul>
                    </div>
                    <div className="rightExperience" data-aos='fade-left'>
                        <Carousel className='carousel'>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech1} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech2} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech3} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech4} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech5} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech6} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={sumtech7} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={sumtech8} alt="" className='carouselImage' />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="experience experience2">
                    <div className="leftExperience" data-aos='fade-right'>
                        <Carousel className='carousel'>
                            <Carousel.Item interval={1000}>
                                <img src={intern1} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={intern2} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={intern3} alt="" className='carouselImage' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={intern4} alt="" className='carouselImage' />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="rightExperience" data-aos='fade-left'>
                        <h3>Junior Front-End Mobile Developer <span className='date'>(June – August 2023)</span></h3>
                        <h4>Internship at Bitshares Labs Incorporation (BLINC)</h4>
                        <ul>
                            <li>Handled a team and awarded an excellence in leadership</li>
                            <li>Built a Gas Fee Tracker Application with my team</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section4" data-aos="fade-in">
                <h2>Training</h2>
                <h3> <a href="https://drive.google.com/file/d/18f-iPovXLbZPpbxXH-FiE2LxDYXez83Y/view?usp=sharing" target='_blank'>Village 88 Full Stack Web Development Training</a><span className='date'>(January – April 2024)</span></h3>
                <ul>
                    <li>Accomplished 16-weeks of intensive full stack web development training</li>
                    <li>Learned industry best coding practices</li>
                </ul>
                <a href="https://village88.com/" target='_blank'><img src={vilage88} alt="village88 logo" /></a>
            </section>
            <section className="section5" data-aos="zoom-in-down">
                <h2>Certifications</h2>
                <div className="certifications">
                    <div className="certificationsCol1">
                        <div className="certificate1">
                            <Card style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img variant="top" src={webcert} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Proficient in Web Fundamentals Track</Card.Title>
                                    <Card.Text>
                                        Successfully cloned a given webpage using pure
                                        HTML and CSS in a span of 4 hours limit.
                                    </Card.Text>
                                    <Button className="button" href="https://drive.google.com/file/d/1MgbO4vAhAf604Q6H0DPXdWFUhOI6MNfR/view?usp=sharing" target='_blank'>See Certificate</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="certificate2">
                            <Card style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img variant="top" src={phpcert} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Proficient in Advance PHP Track</Card.Title>
                                    <Card.Text>
                                        Coded a given wireframe using HTML, CSS, CodeIgniter,
                                        and MySQL in a span of 8 hours.
                                    </Card.Text>
                                    <Button className="button" href="https://drive.google.com/file/d/1Vi6UqIM4_OHOQcUx1PzLDDzfS66vGoLC/view?usp=sharing" target='_blank'>See Certificate</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="certificationsCol2">
                        <div className="certificate3">
                            <Card style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img variant="top" src={jscert} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Proficient in Advance JavaScript Track</Card.Title>
                                    <Card.Text>
                                        Coded a given wireframe using HTML, CSS, JavaScript,
                                        Express, NodeJS, Sockets.io in a span of 7 hours.
                                    </Card.Text>
                                    <Button className="button" href="https://drive.google.com/file/d/1j4OdYcfeuLYAvJ9lEAf6jt66oJM3GVQB/view?usp=sharing" target='_blank'>See Certificate</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="certificate4">
                            <Card style={{ width: '18rem' }} data-aos="fade-in">
                                <Card.Img variant="top" src={fecert} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Proficient in Front-end Track</Card.Title>
                                    <Card.Text>
                                        Coded a given wireframe using ReactJS and React
                                        Bootstrap in a span of 7 hours.
                                    </Card.Text>
                                    <Button className="button" href="https://drive.google.com/file/d/164q-CH_mcH6WbbZeWkkeagMZAllIvFcV/view?usp=sharing" target='_blank'>See Certificate</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;