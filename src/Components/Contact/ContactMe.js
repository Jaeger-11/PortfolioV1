import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import {FaTwitter,FaLinkedinIn,FaWhatsapp, FaInstagram} from "react-icons/fa";


const ContactMe = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kiwco1m', 'template_h23s28s', form.current, '1V-9IXXKfgv4tLXkB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    
    return(
        <section className="contactMe" id="contact">
            <h2 className="c-header">Contact me </h2>
            <p className="c-mail">You can get in touch through my social networks or send an e-mail to <span>falodunoluwadamilolapaul@gmail.com</span> </p>
            <form className="c-form" ref={form} onSubmit={sendEmail}>
                <p><input type='text' placeholder = 'Name' required className="name" name="user_name"/></p>
                <p><input type='email' placeholder = 'Email' required className="email" name="user_email" /> </p>
                <p><textarea name="message" className="message" placeholder="Message"></textarea></p>
                <input type="submit" value="Send Message" className="button c-btn"/>
            </form>
            <div className="c-flex">
                <a href="https://twitter.com/damzypaulzs"><FaTwitter className="c-icons"/></a>
                <a href="https://www.linkedin.com/in/oluwadamilola-falodun-b084221a"><FaLinkedinIn className="c-icons"/></a> 
                <a href="https://wa.me/qr/5MROWV25I5PYK1"><FaWhatsapp className="c-icons"/></a> 
                <a href="https://www.instagram.com/_damzy_?r=nametag"><FaInstagram className="c-icons"/></a> 
            </div>
        </section>
    )
}

export default ContactMe;