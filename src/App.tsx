
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Introduction from './components/Introduction/Introduction'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
