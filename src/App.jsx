import { useState } from 'react'
import './App.css'
import Spline from "@splinetool/react-spline";
import Navbar from './components/Navbar'
import Body from './components/Body'
import MatrixBackground from "./components/MatrixBackground";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MatrixBackground />
      <Navbar />
      <main class="flex flex-grow">
      <Body />
      </main>
      <Footer />
    </div>

  )
}

export default App
