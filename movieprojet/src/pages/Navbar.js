import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ onSearch , onSelectType, onSelectGenre}) {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    console.log("Noor")

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error(error));
  }, []);
 
  return (
    <div> 

    <nav
     
    >
      <Link href="/" className="logo" style={{ padding: "5px" }}>
        <img
          src="https://icons.iconarchive.com/icons/designbolts/free-multimedia/512/Film-icon.png"
          style={{ width: "50px" }}
        />
      </Link>


      <select  style={{height:"30px"}} id="genre" onChange={(e) => onSelectGenre(e.target.value)}>
        <option value="">Genre</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

    

      <div className="movie-links" style={{ padding: "10px" }}>
        <select  onChange={(e) => onSelectType(e.target.value)}>
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
  
    
    </div>
  );
}

export default Navbar;
