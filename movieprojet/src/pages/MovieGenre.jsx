
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';

const MovieGenre = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    fetchMoviesByGenre(genreId);
  };

  const fetchMoviesByGenre = async (genreId) => {
    try {

      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bacc5cb7f37a366d5cd55cba74b43fe2&with_genres=${genreId}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  return (
    <div>
    
      <Navbar onGenreChange={handleGenreChange} />


   
    </div>
  );
};

export default MovieGenre ;
