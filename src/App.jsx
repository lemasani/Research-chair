import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import TopNavbar from './Components/Navbar';
import Loader from './Components/loader';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const AboutResearch = lazy(() => import('./Pages/Research/About Research'));
const Fieldworks = lazy(() => import('./Pages/Research/Fieldworks'));
const WorkingPapers = lazy(() => import('./Pages/Research/WorkingPapers'));
const Publications = lazy(() => import('./Pages/Research/Publications'));
const Outreach = lazy(() => import('./Pages/Research/Outreach'));
const Symposyium = lazy(() => import('./Pages/Research/Symposyium'));
const News = lazy(() => import('./Pages/News'));
const NewsDetails = lazy(() => import('./Pages/NewsDetails'));
const Seminar = lazy(() => import('./Pages/Training/Seminar'));
const Internship = lazy(() => import('./Pages/Training/Internship'));
const ResearchSupport = lazy(() => import('./Pages/Training/ResearchSupport'));
const SecondDialogue = lazy(() => import('./Pages/PolicyDialogue/SecondDialogue'));
const FirstDialogue = lazy(() => import('./Pages/PolicyDialogue/FirstDialogue'));

function App() {
  return (
    <BrowserRouter>
      <TopNavbar/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>

          //research routes
          <Route path='/research/about-research' element={<AboutResearch/>}/>
          <Route path='/research/fieldwork' element={<Fieldworks/>}/>
          <Route path='/research/working-papers' element={<WorkingPapers/>}/>
          <Route path='/research/publications' element={<Publications/>}/>
          <Route path='/research/outreach' element={<Outreach/>}/>
          <Route path='/research/symposyium&conferences' element={<Symposyium/>}/>

          //training routes
          <Route path='/training/seminars' element={<Seminar/>}/>
          <Route path='/training/internship' element={<Internship/>}/>
          <Route path='/training/research-support' element={<ResearchSupport/>}/>

          //policy dialogue routes
          <Route path='/1stDialogue' element={<FirstDialogue/>}/>
          <Route path='/2ndDialogue' element={<SecondDialogue/>}/>

          //news routes
          <Route path='/news' element={<News/>}/>
          <Route path="/news/:id" element={<NewsDetails/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;