import React from 'react'
import './projects.css'
import rest from '../../assets/rest.jpg'
import burger from '../../assets/burger.PNG'
import img from '../../assets/img_bSlide1.jpg'
import atm from '../../assets/atm.jpg'

const data = [
  {
    id: 1,
    image: rest,
    title: 'Restaurant Reservation Website',
    github : 'https://github.com/noranorab/tbelti_restaurant_reservation',
    demo : "The goal of the restaurant's website is to get customers to make a reservation. I used HTML, CSS, JS, Node.js, Express, PostgreSQL."
  },
  {
    id: 2,
    image: burger,
    title: 'Burger Builder',
    github : 'https://github.com/noranorab/tbelti_restaurant_reservation/blob/main/public/js/burgerBuilder.js',
    demo : "Build your burger with as many items as you want! A burger builder with JavaScript, CSS and HTML."
    
  },
  {
    id: 3,
    image: img,
    title: 'JavaFx Hospital Interface',
    github : 'https://github.com/noranorab/Hospital_Management',
    demo: "This project aims at digitalizing hospital management. After passing the login page, patients can be registered and managed. For database management, I used MySQL."
  },
  {
    id: 4,
    image: atm,
    title: 'ATM Evaluation',
    github : 'https://www.figma.com/file/5j69X4Ulux40Ib1DE5tgCj/it%C3%A9ration-2?node-id=0%3A1&t=3wJkMkfcmMu5KcUB-1',
    demo: "Using the UX/UI Design approach, I evaluated the interface of four different ATMs against the 10 heuristics of UX Design, I also designed an ideal ATM using Figma"
  }

]

const Projects = () => {
  return (
    <section id='projects'>

      <h5>My Recent Work</h5>
      <h2 className='proj'>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <p className='pp'>
                {demo}  
                </p>
              <div className="portfolio_item-cta">
                 <a href={github} className='btn' target='__blank'>Github</a>
               </div>
              </article>
       
            
          )
        })}
      </div>
    </section>
  )
}

export default Projects
