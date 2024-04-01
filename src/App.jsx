import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TopNavbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import AboutResearch from './Pages/Research/About Research'
import Fieldworks from './Pages/Research/Fieldworks'
import WorkingPapers from './Pages/Research/WorkingPapers'
import Publications from './Pages/Research/Publications'
import Outreach from './Pages/Research/Outreach'
import Symposyium from './Pages/Research/Symposyium'
import News from './Pages/News'
import NewsDetails from './Pages/NewsDetails'

function App() {
  

  return (
    <BrowserRouter>
    <>
      <TopNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/research/about-research' element={<AboutResearch/>}/>
      <Route path='/research/fieldwork' element={<Fieldworks/>}/>
      <Route path='/research/working-papers' element={<WorkingPapers/>}/>
      <Route path='/research/publications' element={<Publications/>}/>
      <Route path='/research/outreach' element={<Outreach/>}/>
      <Route path='/research/symposyium&conferences' element={<Symposyium/>}/>





      <Route path='/news' element={<News/>}/>
      <Route path="/news/:id" element={<NewsDetails/>} />
      
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
