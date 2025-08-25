import { useState } from 'react'
import './App.css'
import Spline from "@splinetool/react-spline";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Body from './components/Body'
import MatrixBackground from "./components/MatrixBackground";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MatrixBackground />
      <Navbar />
      <Body />
      <Footer />
    </div>

  )
}

export default App
