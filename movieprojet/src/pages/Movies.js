import React from "react";
import Navbar from './Navbar'
import Footer from './Footer.jsx'
import { useRouter } from "next/router";
import { MoviesByType } from "./api/movies.js";
function Movies({ movies }){ 
    
return <div style={{height:"100vh"}}>
     <Navbar />

     <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
     <Footer />
      </div>
}

export default Movies
