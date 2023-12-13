
import './App.css'
import Banner from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
        <NavBar/>
        <Banner/>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App
