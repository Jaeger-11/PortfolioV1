import React, {useRef, useEffect} from "react";
import './Projects.css';
import Data from '../data';
import {FaGithub} from 'react-icons/fa';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const Projects = useRef();
    const select = gsap.utils.selector(Projects);
    
    // const tl = useRef();
    // useEffect(() => {
    //     const animation = tl.current = gsap.timeline()
    //         .from(select(".project1"), { x:100, delay: 1, opacity: 0})
    //         .from(select(".project2"), { y: 100, opacity: 0, ease: 'bounce-in' })
    //         .from(select(".project3"), { x: -100, opacity: 0, ease: 'ease-out' })
    //         .from(select(".project4"), { y: -100, opacity: 0, ease: 'bounce-out' })
    //         .from(select(".project5"), { x: -100, opacity: 0, ease: 'bounce' })
    //     return () => {
    //         animation.kill();
    //     }
    // }, [])

    useEffect(() => {
        let A1 = gsap.from(select(".project1"), { x:100, delay: 0.5, opacity: 0, scrollTrigger: {trigger : ".project1"}})
        let A2 = gsap.from(select(".project2"), { y: 100,delay: 0.5, opacity: 0, ease: 'bounce-in', scrollTrigger: {trigger : ".project2"} })
        let A3 = gsap.from(select(".project3"), { x: -100,delay: 0.5, opacity: 0, ease: 'ease-out', scrollTrigger: {trigger : ".project3"} })
        let A4 = gsap.from(select(".project4"), { y: -100,delay: 0.5, opacity: 0, ease: 'bounce-out', scrollTrigger: {trigger : ".project4"} })
        let A5 = gsap.from(select(".project5"), { x: -100, opacity: 0, ease: 'bounce', scrollTrigger: {trigger : ".project5"} })

        return () => {
            A1.kill()
            A2.kill()
            A3.kill()
            A4.kill()
            A5.kill()
        }
    })
    return(
        <section className="p-section" id="projects" ref={Projects}>
            <h2 className="p-header">Projects</h2>
            <div className="p-flex">
            {Data.map((Project, index ) => {
                const {name, link, about, img, github, cname} = Project;
                return <article key={index} className={`${cname} p-article`}>
                    <a href={link}><img src={img} className="frame" scrolling="no"/></a>
                    {/* <img src={img} alt={name} className='p-image'/> */}
                    <div className="p-absolute">
                        <div className="p-name">
                            <p><a href={link}>{name}</a></p>
                            <a href={github}> <FaGithub className="git"/></a>
                        </div>
                        <p>{about}</p>
                    </div>
                </article>
            })}
            </div>
        </section>
    )
}

export default Projects;