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
      <div className="logo" style={{padding: "10px"}}>

<img src="https://png.pngtree.com/png-clipart/20200225/ourlarge/pngtree-movie-icon-design-png-image_2153114.jpg" style={{width:"50px"}} />
      </div>

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

      <div className="nav-links" style={{padding: "10px"}}>

      </div>
    </nav>)
}
export default Navbar