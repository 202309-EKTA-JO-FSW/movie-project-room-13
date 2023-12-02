// pages/movies/[type].js
import { useRouter } from "next/router";
import { MoviesByType } from "../api/movies";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Movies = ({ movies }) => {


  return (
  
    <div >
          <Navbar />
   
   
      <ul style={{display:"flex", flexWrap:"wrap", padding:"16px"}}>
        {movies.map((movie) => ( 
            <li  style={{width:"25%"}} key={movie.id}>
      <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title} width={"100px"}
                />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </li>
 
        
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params }) {
    try {
      const { type } = params;
      const movies = await MoviesByType(type);
 
      if (!movies) {
        throw new Error("Failed to fetch movies");
      }
  
      return {
        props: { movies },
      };
    } catch (error) {
      console.error("Error fetching movies:", error.message);
  
   
      return {
        props: { movies: [] },
      };
    }
  }
  
  


export default Movies;
