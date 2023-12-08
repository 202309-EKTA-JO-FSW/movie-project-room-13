import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FinalFooter from "@/components/FinalFooter";

const ActorDetailPage = () => {
  const router = useRouter();
  const { actorsId } = router.query;
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActorData = async () => {
      if (!actorsId) return;

      const actorUrl = `https://api.themoviedb.org/3/person/${actorsId}`;
      const actorOptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmY4NThjNjhmZDM2MzkyYzc4YzhhOWNmNTMxMTI3MSIsInN1YiI6IjY1NjRjMTRjZWRlYjQzMDExZDVhMzcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cc9AYZcT1aXwsWDYpfqJGJXStJfPgHHiMiv5icr7lck'
        }
      };

      try {
        const actorResponse = await fetch(actorUrl, actorOptions);
        const actorData = await actorResponse.json();
        console.log('Actor Data:', actorData);
        setActor(actorData);

        if (actorData.known_for) {
          setKnownFor(actorData.known_for);
        }
      } catch (error) {
        console.error('Error fetching actor details:', error);
      }
    };

    const fetchPopularActors = async () => {
      const popularActorsUrl = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
      const popularActorsOptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmY4NThjNjhmZDM2MzkyYzc4YzhhOWNmNTMxMTI3MSIsInN1YiI6IjY1NjRjMTRjZWRlYjQzMDExZDVhMzcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cc9AYZcT1aXwsWDYpfqJGJXStJfPgHHiMiv5icr7lck'
        }
      };

      try {
        const popularActorsResponse = await fetch(popularActorsUrl, popularActorsOptions);
        const popularActorsData = await popularActorsResponse.json();
        console.log('Popular Actors Data:', popularActorsData);
        // Process the popular actors data if needed
      } catch (error) {
        console.error('Error fetching popular actors:', error);
      }
    };

    fetchActorData();
    fetchPopularActors();
  }, [actorsId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{actor.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`} alt={actor.name} />

      {actor.also_known_as && actor.also_known_as.length > 0 && (
        <div>
          <h2>Also Known As:</h2>
          <ul>
            {actor.also_known_as.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {actor.biography && (
        <div>
          <h2>Biography:</h2>
          <p>{actor.biography}</p>
        </div>
      )}

      {actor.birthday && (
        <div>
          <h2>Birthday:</h2>
          <p>{actor.birthday}</p>
        </div>
      )}
      <FinalFooter />
    </div>
  );
};
export default ActorDetailPage;