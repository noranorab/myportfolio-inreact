import React from 'react'
import './about.css'
import me from '../../assets/Me.png'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2 className='me'>About Me</h2>
      <div className="about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={me} alt='about me'/>
            </div>
          </div>
          
          <div className='about_content'>
              <div className="ps">
                    <p>
                I love writing codes and creating things that live on the internet.
                    Ever since writing my first program in PASCAL,
                    modifying and seeing the output, I have decided to follow 
                    a software engineering carrier. My interest in web development 
                    started back in 2019 when I decided to learn about HTML & CSS. 
                </p>
                <p>
                    Fast-forward to today, and I have worked on several projects with 
                    the design thinking approach, combining creativity and technology,
                    and making the end user the center of innovation.
                </p>

                <a href='#contact' className='btn'>Let's Talk</a>
              </div>
              
          </div>
      </div>
      
      
    </section>
  )
}

export default About
