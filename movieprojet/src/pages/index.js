import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
//import App from './App';
//import { Provider } from 'react-redux';
//import store from "./redux/store";
<<<<<<< HEAD
=======

import { BrowserRouter } from 'react-router-dom';
>>>>>>> 2170818e69130e31bf4d8e408d4920d56265c8e2
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer.jsx'
import MovieByGenre from './MovieByGenra.jsx'
import MovieList from "./movies/index"


export default function Home() {
  return (
    <div>
<<<<<<< HEAD

      <MovieList/>
 
=======
      <Navbar />
      <MovieList/>
      <Footer />


>>>>>>> 2170818e69130e31bf4d8e408d4920d56265c8e2
    </div>
  )
}