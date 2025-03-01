import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UploadForm from './components/UploadForm'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div >
      <Navbar/>
      <UploadForm/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App