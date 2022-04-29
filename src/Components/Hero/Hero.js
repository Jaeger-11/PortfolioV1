import React, {useRef, useEffect, useLayoutEffect} from "react";
import {FaGithub, FaInstagram,FaTwitter,FaLinkedinIn,FaWhatsapp} from "react-icons/fa";
import './Hero.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    // we use useRef and useEffect when animating with GSAP when we render
    //Animating the header with name
    const headerRef = useRef();
    useLayoutEffect(() => {
        gsap.from(headerRef.current, {duration: 1, delay: 1, top : "-50", x: 100, ease: "bounce-out" })
    },[])

    //To avoid the use of duplicate useRef, we can use the GSAP's selector utility to easily select child elements

    const cont = useRef();
    const select = gsap.utils.selector(cont);
    useEffect(() => {
        const animate = gsap.from(select(".i-left"), {x: 200})
        return () => {
            animate.kill();
        }
    },[])
    return(
        <main className="container" ref={cont}>
            <div className="hero" id="hero">
                <section className="i-left">
                <header className="header" ref={headerRef}>Damilola</header>
                    <div className="i-div">
                        <article className="i-name">
                            <span>Hey! I Am</span>
                            <span>Falodun Oluwadamilola</span>
                            <span>A Front-end web Developer</span>
                            <span> An interactive and creative developer keen on building amazing user interface </span>
                        </article>
                        <a href="#contact" className="a-contact"><button className="button i-btn"> Contact Me  </button> </a>
                    </div>
                    <div className="icons">
                        <a href="#" ><FaTwitter className="h-icons"/></a>
                        <a href="#" ><FaGithub className="h-icons"/></a>
                        <a href="#" ><FaWhatsapp className="h-icons"/></a>
                        <a href="#" ><FaLinkedinIn className="h-icons"/></a>
                        <a href="#" ><FaInstagram className="h-icons"/></a>
                    </div>
                    <div className="menu">
                        <p> <a href="#about" className="sub"> About--{`>`} </a> </p>
                        <p> <a href="#projects" className="sub">Projects--{`>`}</a> </p>
                        <p> <a href="#contact" className="sub" >Contact--{`>`}</a> </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Hero;