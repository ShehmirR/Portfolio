import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Experience from './pages/Experience.js'
import Projects from './pages/Projects.js'
import Skills from './pages/Skills.js'




function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
        <link rel="stylesheet" type="text/css" href="./index.css"></link>
        <title>Shehmir Rangwala</title>
      </head>

      <Header />

      {/* <body>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Router>
      </body> */}


      <div id="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>

      <Footer />
    </div>
  )
}

export default App
