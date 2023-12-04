import React ,{ useState, useEffect } from "react";
import Link from "next/link";


function Navbar(){
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNjNWNiN2YzN2EzNjZkNWNkNTVjYmE3NGI0M2ZlMiIsInN1YiI6IjY1Njc3NjZjMDIxY2VlMDEzYTg0MzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AzZZFUx9YA3TyFD4o86SQE1mY1CwZkk5Kx09BfWQZPY',
          },
        };
    
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
          .then(response => response.json())
          .then(data => setGenres(data.genres))
          .catch(error => console.error(error));
      }, []);
     
   
   return (<nav style={{display:"flex", width:"100vw" ,justifyContent:"center", backgroundColor:"whitesmoke" }}>
   <Link href="/" className="logo" style={{padding: "5px"}}>

<img src="https://png.pngtree.com/png-clipart/20200225/ourlarge/pngtree-movie-icon-design-png-image_2153114.jpg" style={{width:"50px"}} />
      </Link>

      <div className="genres-dropdown" style={{padding: "10px"}} >
      
        <select>
          <option value="">Select Genre</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className="movie-links" style={{padding: "10px"}}>

        <select name="movieId">
          <option value="Top Rate">Top Rate</option>
          <option value="Popular">Popular</option>
          <option value="Latest">Latest</option>
          <option value="Now playing">Now playing</option>
          <option value="Upcoming">Upcoming</option>
        </select>

      </div>

  
      <Link href="/Movies" style={{padding: "10px"}}>
        Movies
      </Link>
      <Link href="/Actors" style={{padding: "10px"}}>
        Actors
      </Link>
    
 
      
    </nav>)
}
export default Navbar