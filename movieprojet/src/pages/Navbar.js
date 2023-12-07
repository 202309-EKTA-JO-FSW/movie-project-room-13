import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ onSearch }) {
  const [genres, setGenres] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const router = useRouter();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNjNWNiN2YzN2EzNjZkNWNkNTVjYmE3NGI0M2ZlMiIsInN1YiI6IjY1Njc3NjZjMDIxY2VlMDEzYTg0MzMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AzZZFUx9YA3TyFD4o86SQE1mY1CwZkk5Kx09BfWQZPY",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error(error));
  }, []);
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const fetchMoviesByGenre = async () => {
    try {
      // Replace 'YOUR_TMDB_API_KEY' with your actual TMDB API key
      const apiKey = 'YOUR_TMDB_API_KEY';
      const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=bacc5cb7f37a366d5cd55cba74b43fe2&with_genres=${selectedGenre}`;
      const response = await fetch(moviesUrl);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  useEffect(() => {
    // Fetch movies when the selected genre changes
    if (selectedGenre) {
      fetchMoviesByGenre();
    }
  }, [selectedGenre]);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    router.push(`/movies/type/${type}`);
  };

  return(
      <section class="relative mx-auto">
        <nav class="flex justify-between bg-teal-500 text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="/">
              <img class=" max-h-8"
              src="https://png.pngtree.com/png-clipart/20200225/ourlarge/pngtree-movie-icon-design-png-image_2153114.jpg"
              />
            </a>
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
              <div className="movie-links hover:text-gray-200 bg-teal-500">
        
                <select class="hover:text-gray-200 bg-teal-500" id="genre" onChange={handleGenreChange}>
                    <option value="">Genre</option>
                    {genres.map(genre => (
                      <option key={genre.id} value={genre.id}>
                        {genre.name}
                      </option>
                    ))}
                  </select>
                  </div>
            
              </li>
              
            <li><div className="movie-links hover:text-gray-200 bg-teal-500">
                <select value={selectedType} onChange={handleTypeChange}class="bg-teal-500">
                  <option value="">Movies</option>
                  <option value="top_rated">Top Rated</option>
                  <option value="popular">Popular</option>
                  <option value="upcoming">Up Coming</option>
                  <option value="now_playing">Now Playing</option>
                </select>
              </div>
            </li>
              <li><a class="hover:text-gray-200" href="/Actors">Actors</a></li>
              <li> <input
                class= "h-6 rounded-lg text-center"
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </li>


            
            </ul>
            
          </div>
        
      <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>

        </nav>
        
      </section>
  )

  /*return (


    <div> <script src="//unpkg.com/alpinejs" defer></script>
     <style jsx>{`
        nav {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          background-color: black;
          padding: 10px;
          color: white;
        }

        .logo img {
          width: 50px;
        }

        select, input {
          height: 30px;
          margin-left: 10px;
          font-size: 14px;
          color:black
        }
        select {
          background-color: transparent;
          color: white;
          border: none;
          padding: 5px;
          opacity: 0.6;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        select:hover {
          opacity: 1;
        }
        .movie-links {
          padding: 10px;
          background-color: transparent;
          color: white;
          border: none;
          padding: 5px;
          opacity: 0.6;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 20px;
        }

        h3 {
          margin: 0;
        }

        p {
          margin: 5px 0;
        }

        img {
          width: 100px;
        }
       
      `}</style>

    <nav
     
    >
      <Link href="/" className="logo" style={{ padding: "5px" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20200225/ourlarge/pngtree-movie-icon-design-png-image_2153114.jpg"
          style={{ width: "50px" }}
        />
      </Link>


      <select style={{height:"30px"}} id="genre" onChange={handleGenreChange}>
        <option value="">Genre</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

    

      <div className="movie-links" style={{ padding: "10px" }}>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="">Movies</option>
          <option value="top_rated">Top Rated</option>
          <option value="popular">Popular</option>
          <option value="upcoming">Up Coming</option>
          <option value="now_playing">Now Playing</option>
        </select>
      </div>

    
      <Link href="/Actors" style={{ padding: "10px" }}>
        Actors
      </Link>

      <input
        style={{ height: "25px" }}
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </nav>
    <div>
        {movies.length === 0 ? (
          <p>No movies found for the selected genre.</p>
        ) : (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} width={"100px"} />
              </li>
            ))}
          </ul>
        )}
      </div>
    
    </div>
  );*/
}

export default Navbar;
