import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
//import App from './App';
//import { Provider } from 'react-redux';
//import store from "./redux/store";
import { BrowserRouter } from "react-router-dom"
import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"

import MovieList from "./movies/index"

export default function Home() {
  return (
    <div>
      <Navbar />
      <MovieList />
      <Footer />
    </div>
  )
}
