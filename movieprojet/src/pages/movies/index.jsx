import React, { useEffect, useState } from "react"
import { getLatestMovies } from "../../API"
import { data } from "autoprefixer"
//import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2MzNTAzM2VlNzJlZjNiYjI2MjA4NzY4OGJkODM5ZiIsInN1YiI6IjY1NjhlY2FlNzdjMDFmMDEyYzM5YjZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjfKmBSBk43rsuewvVWuCaDY_11bN22u373JpBi4G5k`,
      },
    }

    //try {
      /*const response = await fetch('https://api.themoviedb.org/3/movie/latest', options);
            const data = await response.json();
            setMovies(data.results); 
            */
      fetch("https://api.themoviedb.org/3/movie/now_playing", options)
        .then((res) => res.json())
        .then((data) => setMovies(data.results))
        .catch(err => console.error(err))
   /* } catch (error) {
      console.error("Error fetching latest movies:", error)
    }
    */
    //};
    console.log("lubna")

    //fetchData();
  }, [])
  console.log({ movies })
  /*
      const data = await getLatestMovies()
      setMovies(data)
    }

    fetchMovies()
  }, [])
  */

  return (
    <div >
      <h2>Playing Now</h2>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-40">
        {movies.map((movie) => 
        (
         /*<li key={movie.id}
         >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li> */


//<li key={movie.id}  > 



<div  key={movie.id} className='flex items-center justify-center h-screen bg-[#0d1829]  '>
    <div className=' mx-auto bg-white rounded-3xl shadow-xl'>
         <div className="grid rounded-3xl max-w-sm shadow-sm bg-slate-100  flex-col">
      <img
src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          width="390"
          height="200"
         className="rounded-t-3xl justify-center grid h-80 object-cover"
          alt="movie.title"
        /> 

      <div className="group p-6 grid z-10">
        <a
          href= ''
          className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2"
        >
         {movie.title}
        </a>
        <span className="text-slate-400 pt-2 font-semibold">
          

        </span>
        <div className="h-28">
          <span className="line-clamp-4 py-2 text-base font-light leading-relaxed">
{movie.overview}

          </span>
        </div>
        <div className=" grid-cols-2 flex group justify-between">
          <div className="font-black flex flex-col">
            <span className="text-yellow-500 text-xl">{movie.release_date} 
</span>
            <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">{movie.vote_average}
             
             <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#eab308"/> </g>

</svg>
            </span>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-7" />
            <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
            {movie.vote_count} 
            </span>
          </div>
      </div>
    </div>
    </div>
</div>

</div>





         
        ))}
     </div>
    </div>
  )
}

export default MovieList
