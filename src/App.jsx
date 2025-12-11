import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Skill from './Pages/Skill'
import Experience from './Pages/Experience'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'




function App() {
  return (
  <>
      <div id="home"><Home /></div>
      <div id="skill"><Skill /></div>
      <div id="experience"><Experience /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
    </>
  )
}

export default App