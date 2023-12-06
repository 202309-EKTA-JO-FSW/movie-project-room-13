import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";



const SinglePageMovie = () => {
    const [moiveData , setMovieData ] = useState({})
    const [movieCast , setMovieCast] = useState({})
    const [movieTrailer , setMovieTrailer] = useState({})


    const router = useRouter()
    const currentId = router.query.id
    //console.log(currentId)

    
    
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

        //fetch for trailer
        const fetchTrailer = async () => {
          
        fetch(`https://api.themoviedb.org/3/movie/${currentId}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovieTrailer(response))
        .catch(err => console.error(err));
        }
        fetchTrailer()

        fetch(`https://api.themoviedb.org/3/movie/${currentId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovieData(response))
        .catch(err => console.error(err));



      })

      //console.log(movieTrailer)

      const firstTrailerKey = movieTrailer.results?.find(item => item.type === 'Trailer');
      const key = firstTrailerKey ? firstTrailerKey.key : null;

      //console.log(key);
      //console.log(trailerKeys)
      
      if (moiveData && movieCast){
        const mainCast = movieCast.cast?.slice(0, 6)
        return (
          <>
          <Navbar />
          
          <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        
          <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <img class="w-full" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${moiveData.poster_path}`}
              alt={moiveData.original_title} 
              />
            <a href={`https://www.themoviedb.org/video/play?key=${key}`} class="text-sm leading-none text-gray-600 dark:text-gray-300 font-semibold ">Movie Trailer</a>        
                            
              <iframe
                  width="560"
                  height="315"
                  src={`https://www.themoviedb.org/video/play?key=${key}`}
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
          </div>
        
          <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div class="border-b border-gray-200 pb-6">
              <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{moiveData.original_title}</h1>
            </div>
            
            <div class="py-4 border-b border-gray-200 flex items-center justify-between">
              <p class="text-base leading-4 text-gray-800 dark:text-gray-300">{moiveData.overview}</p>
            </div>
            
            <div>
              <p class="xl:pr-48 text-lg lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 font-semibold">Relesed Date: {moiveData.release_date}</p>
              <p class="xl:pr-48 text-lg lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 font-semibold">Production Companies: </p>

              
                      {
                        moiveData.production_companies?.map((com) => (
                          <li class = "list-none ">
                              <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">{com.name}</p>
                          </li>
                          ))
                      }
            </div>
            <div>
              <p class="text-lg leading-4 mt-7 text-gray-600 dark:text-gray-300">Runtime : {moiveData.runtime}</p>
              <p class="text-lg leading-4 mt-7 text-gray-600 dark:text-gray-300 font-semibold">Langugaes:</p>

              
                    {
                        moiveData.spoken_languages?.map((com) => (
                          <li class = "list-none">
                              <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">{com.name}</p>
                          </li>
                          ))
                    }
              <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Vote Average: {moiveData.vote_average} <strong>Vote Count: {moiveData.vote_count}</strong></p>
            </div>
          </div>
        </div>
      <div class="max-w-2xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Main Cast</h3>
        </div>
        <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            { mainCast?.map((cast) => (
            <li class="py-3 sm:py-4">
              <a href={`/actors/${encodeURIComponent(cast.id)}`}>
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                        alt={cast.original_title} class="w-full h-48 rounded-md object-cover"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {cast.name}
                        </p>
                    </div>
                </div>
                </a>
            </li>
            
            ))
        }
        </ul>
        </div>
      </div>
      <Footer />

        
      </>

        )
      }

      
    
}
export default SinglePageMovie