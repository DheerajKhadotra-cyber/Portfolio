import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navebar from './components/Navebar'
import Home from './Pages/Home'
import About from './Pages/AboutOK'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import SocialLinks from './Pages/SocialLinks'




const App = () => {
  return (
    <div className = '  '>
      <Navebar />
     {/* <Routes >
      <Route path = '/Home' element = {<Home />}/>
      <Route path = '/About' element = {<About/>}/>
      <Route path = '/Contact' element = {<Contact/>}/>
      <Route path = '/Skills' element = {<Skills/>}/>
      <Route path = '/Project' element = {<Project/>}/>
      <Route path = '/SocialLinks' element = {<SocialLinks/>}/>
     </Routes> */}
     <Home />
     <About />
     <Skills />
     {/* <Project /> */}
     {/* <Contact /> */}
     <SocialLinks />
     
    </div>
  )
}

export default App

