import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'
import { NavbarComponent } from './components/navbar/Navbar'
import { SocialMediaSet } from './components/social media-icon-set/SocialMediaSet'
import About from './Pages/about/PageAbout'
import PageContact from './Pages/services/PageContact'
import Home from './Pages/home/PageHome'
import CareerAndHistory from './Pages/career-and-history/PageCareerAndHistory'
import Works from './Pages/works/PageWorks'

const App: React.FC = () => {
  return (
    <>
      <div className='fixed-top mt-0'>
        <NavbarComponent />
      </div>
      <Home />
      <About />
      <CareerAndHistory />
      <Works />
      <PageContact />
      <div className='fixed-bottom d-flex justify-content-end mb-2 me-3'>
        <SocialMediaSet />
      </div>
    </>
  )
}

export default App
