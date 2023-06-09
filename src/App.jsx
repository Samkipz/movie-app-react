import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <>
      <div className='app'>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
