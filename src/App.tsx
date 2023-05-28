
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Introduction from './components/Introduction/Introduction'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div id = "mainPage">
      <div id = "LeftPart">
        <Introduction />
        <NavBar />
      </div>
      <div id = "RightPart">
        <Routes>
          <Route path = "/AboutMe" element = { <AboutMe />} />
          <Route path = "/Experience" element = { <Experience />} />
          <Route path = "/Skills" element = { <Skills />} />
          <Route path = "/Projects" element = { <Projects />} />
          <Route path = "/Contact" element = { <Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
