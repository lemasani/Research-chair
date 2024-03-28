import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TopNavbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  

  return (
    <BrowserRouter>
    <>
      <TopNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
