import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from  './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
    <About />
    <Projects />
    </main>
    <Footer />
    </>
  )
}

export default App
