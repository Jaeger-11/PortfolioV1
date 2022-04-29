import React, {useRef, useEffect} from 'react';
import {FaReact} from "react-icons/fa";
import {DiCss3, DiHtml5,DiJsBadge,DiDatabase} from "react-icons/di";
import './About.css';
import A2 from '../../Images/1.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const About = useRef();
    const select = gsap.utils.selector(About);

    useEffect(() => {
        let AB1 = gsap.fromTo(select(".s-right"),
        {x: 100,opacity: 0}, 
        { duration: 1.5 , opacity: 1, x: 0,scrollTrigger:{trigger: ".s-right"}});
        return () => {
            AB1.kill()
        }
    }, [])

    return(
        <div className="s-div" id="about" ref={About}>
            <section className="s-image">
                <img src={A2} alt='Loading' />
            </section>
            <section className="s-right">
                <h2>About Me</h2>
                <article>
                    <p>
                    I'm Falodun Oluwadamilola, shortened as Dami, I am 19 years old and currently a final year student of Management & Accounting, Obafemi Awolowo University.
                    I started my coding journey late 2020 with python and HTML and fortunately I fell for it and decided to aim at being a Fullstack Developer, well not there yet but soon...
                    When I'm not coding, I love sports and games, especially football(soccer), a big fan of anime and movies. Arigato.. <br/>
                    I'm familiar with and work with this technologies and frameworks
                    </p>
                    <div className="tools">
                    <ul >
                        <li>HTML5 </li>
                        <li>CSS3</li>
                        <li>TailwindCSS</li>
                    </ul> 
                    <ul>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        {/* <li>Python</li>
                        <li>MySql</li> */}
                        <li>Styled Components</li>
                    </ul> 
                    </div>

                </article>
                <button className="button s-button">Download CV</button>
            </section>
        </div>
    )
}

export default About;