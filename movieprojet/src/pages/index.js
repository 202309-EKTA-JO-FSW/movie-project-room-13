import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Home() {
  const[movies , setMovies] = useState({});
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNjNWNiN2YzN2EzNjZkNWNkNTVjYmE3NGI0M2ZlMiIsInN1YiI6IjY1Njc3NjZjMDIxY2VlMDEzYTg0MzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AzZZFUx9YA3TyFD4o86SQE1mY1CwZkk5Kx09BfWQZPY'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/latest', options)
      .then(response => response.json())
      .then(data=> setMovies(data))
      .catch(err => console.error(err));

  }, [])
  console.log(movies);
  return (
   <div style={{height:"100vh"}} > 
 <Navbar />
 {movies && movies.title && (
          <div key={movies.id}>
           
            {movies.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                  alt={movies.title} width={"100px"}
                />
              )}
             <h3>{movies.title}</h3>
            <p>{movies.overview}</p>
            <p>{movies.original_language}</p>
          </div>
        )}
     
 
 <Footer  />
   </div>)
  

}
//console.log("Lubna");
