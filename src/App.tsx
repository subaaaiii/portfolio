import './App.css'
import Skills from './components/skills'
import AboutMe from './components/about'
import Home from './components/home'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <div className="font-poppins bg-bg">
      <Navbar />
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
