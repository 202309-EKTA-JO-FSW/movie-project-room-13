import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer.jsx"
import MovieByGenre from "./MovieByGenra.jsx"
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
