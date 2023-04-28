import React, {useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='contac'>Contact Me</h2>
      <div className='contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>noranorab7@gmail.com</h5>
            <a href="" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger/>
            <h4>Messenger</h4>
            <h5></h5>
            <a href="">Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin/>
            <h4>Linkedin</h4>
            <h5></h5>
            <a href="">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input className='in' type='text' name='name' placeholder='Your Full Name' required/>
          <input className='in'type='email' name='email' placeholder='Your Email' required/>
          <textarea className='in' name="message" rows="7" placeholder='Your message' required/>
          <button type='submit' id='bttn' className='btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
