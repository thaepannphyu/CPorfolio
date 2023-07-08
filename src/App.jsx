import './App.css'
import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Landing from "./components/sections/landing/Landing"
import ProjectShow from "./components/sections/projectShow/ProjectsShow"
import Skill from "./components/sections/skill/Skill"
import Contact from "./components/sections/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>

      <section>
        <Landing/>
      </section>

      <section>
        {/* <ProjectShow/> */}
      </section>

      <section>
        <Skill/>
      </section>

      <section>
        <Contact/>
      </section>

      <Footer/>
    </div>
  )
}

export default App