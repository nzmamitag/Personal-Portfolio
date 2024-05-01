import React from 'react';
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
function AboutMe() {
    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <section className="section1">
                <div className="rightImage">
                    <img src={Me} alt="Me" />
                </div>
                <div className="leftAboutContainer">
                    <p>
                        Hi! I'm Neds Zamoranos Mamitag, an aspiring Web Designer and Frontend Developer. I graduated from the University of the Cordilleras in Baguio City, Benguet, with a Bachelor of Science in Information Technology. During college, I was exposed to Mobile App Development but encountered difficulty finding a job in web development after graduation. To gain experience, I worked as a technical support staff, focusing on hardware-related tasks like reformatting and building computers.
                    </p>
                    <p>
                        Fortunately, I discovered a free full-stack web development bootcamp called Village88, where I acquired essential skills and technologies for web development. I'm currently exploring my career path, debating whether to specialize in Frontend, Backend, or pursue Full Stack Development. While I aspire to become a Full Stack Developer, I value progressing step-by-step, understanding that a well-designed UI/UX is paramount. It ensures user retention, which is more critical than having a fully functional yet uninviting website.
                    </p>
                </div>
            </section>
            <section className='section2'>
                <div className="leftAboutSection2">
                    <h2>Skills and Technologies</h2>
                    <div className="technologies">
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="js" />
                        <img src={jquery} alt="jquery" />
                        <img src={bootstrap} alt="bootstrap" />
                        <img src={react} alt="react" />
                        <img src={reactbootstrap} alt="reactbootstrap" />
                        <img src={ux} alt="ux" />
                        <img src={rwd} alt="rwd" />
                        <img src={materialUI} alt="materialUI" />
                    </div>
                    <div className="technologies">
                        <img src={java} alt="java" />
                        <img src={php} alt="php" />
                        <img src={express} alt="express" />
                        <img src={node} alt="node" />
                        <img src={socket} alt="socket" />
                        <img src={codeigniter} alt="codeigniter" />
                        <img src={mvc} alt="mvc" />
                        <img src={mysql} alt="mysql" />
                        <img src={git} alt="git" />
                        <img src={github} alt="github" />
                    </div>
                    <div className="technologies">
                        <img src={figma} alt="figma" />
                        <img src={blender} alt="blender" />
                        <img src={computer} alt="computer" />
                        <img src={capcut} alt="capcut" />
                        <img src={picsart} alt="picsart" />
                        <img src={office} alt="office" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;