import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
// import Skills from './Components/skills/Skills'
import Projects from './Components/projects/Projects'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Experience from './Components/Experience/Experience'
// import Vanta from './Components/header/Vanta'
const App = () => {
  return (
    <>
        <Header/>
        {/* <Vanta/> */}

      
        <Nav/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>



    </>
  )
}

export default App
