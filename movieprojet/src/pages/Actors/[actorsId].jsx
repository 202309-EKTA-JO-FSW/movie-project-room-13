import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ActorDetailPage = () => {
  const router = useRouter();
  const { actorsId } = router.query;
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!actorsId) return;

      const url = `https://api.themoviedb.org/3/person/${actorsId}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer YOUR_API_KEY', // Replace with your API key
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data); // Log the data to inspect it
        setActor(data);
      } catch (error) {
        console.error('Error fetching actor details:', error);
      }
    };

    fetchData();
  }, [actorsId]);

  if (!actor) {
    return <div>Loading...</div>; // or handle the loading state in your preferred way
  }

  return (
    <div>
      <h1>{actor.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`} alt={actor.name} />
      <h2>Movies:</h2>
      <ul>
        {actor.known_for ? (
          actor.known_for.map(movie => (
            <li key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title || movie.name} />
              <strong>{movie.title || movie.name}</strong>
            </li>
          ))
        ) : (
          <li>No known movies</li>
        )}
      </ul>
    </div>
  );
};

export default ActorDetailPage;

