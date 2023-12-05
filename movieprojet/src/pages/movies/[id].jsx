import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react'


const SinglePageMovie = () => {
    const [moiveData , setMovieData ] = useState(null)
    const [movieCast , setMovieCast] = useState(null)

    const router = useRouter()
    const currentId = router.query.id
    console.log(currentId)

    
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2I5Y2Y0ZDRmZGFjZTJlZTUxZDhhOWVkODJlYjU2OCIsInN1YiI6IjY1NmUyZmU1NTY4NDYzMDEzMGExMTUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EgaNc5RGe2tTbIkaE5oSVj7jYseWUqKhzjVsWFMFPoo'
        }
      };
      
      //fetching for details 
     
      useEffect(() => {
        


        //fetching for cast 
        const fetchCast = async () => {
          
        fetch(`https://api.themoviedb.org/3/movie/${currentId}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovieCast(response))
        .catch(err => console.error(err));
        }
        fetchCast()

        fetch(`https://api.themoviedb.org/3/movie/${currentId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovieData(response))
        .catch(err => console.error(err));
      })

      //console.log(movieCast)

      


      
      //console.log(moiveData)
      if (moiveData && movieCast){
        const mainCast = movieCast.cast.slice(0, 6)
        return (
          <div>
          <h1>Movie Details</h1>
          <ul>
            <li>
            <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${moiveData.poster_path}`}
                  alt={moiveData.original_title}
                />
                  <strong>Movie Title: {moiveData.original_title}</strong>
                  <p>{moiveData.overview}</p>
                  <p>Relesed Date: {moiveData.release_date}</p>
            </li>
            <li>
              Cast Names: 
              
                { mainCast.map((cast) => (
                  <li>
                  <a href="#">
                      <img
                        src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                        alt={cast.original_title}
                      />
                      {cast.name}
                      </a>
                  </li>
                  ))
                }
      
            </li>
            <li>
              Production Companies: 
                {
                  moiveData.production_companies.map((com) => (
                    <li>
                    </li>
                    ))
                }
            </li>
            <li>
              Runtime : {moiveData.runtime}
            </li>
            <li>
              Langugaes:
              {
                  moiveData.spoken_languages.map((com) => (
                    <li>
                      {com.name}
                    </li>
                    ))
                }
            </li>
            <li>
              Vote Average: {moiveData.vote_average} <span>Vote Count: {moiveData.vote_count}</span>
            </li>

        </ul>
          
        </div>
        )
      }

      
    
}
export default SinglePageMovie