import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cards from "../../components/Cards";
import Navbar from "../Navbar";
//import Footer from "../Footer"
import {data} from "autoprefixer"

const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmY4NThjNjhmZDM2MzkyYzc4YzhhOWNmNTMxMTI3MSIsInN1YiI6IjY1NjRjMTRjZWRlYjQzMDExZDVhMzcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cc9AYZcT1aXwsWDYpfqJGJXStJfPgHHiMiv5icr7lck'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setActors(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div class="actors_logo flex items-center space-x-2 p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiDG9iKXp7XpGGTSXr-UkYUtRqF7rr-XZAg&usqp=CAU.png" alt="Actors List" class="w-12 h-12 rounded-full"/>
  <div class="text-center flex-1">
    <h3 class="text-lg font-caveat italic text-teal-300">ACTORS LIST</h3>
  </div>
</div>

      <ul >
      <Cards items = {actors} folderName="Actors"/>
      {/*
        {actors.map((actor) => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
                <strong>{actor.name}</strong>
            </Link>
            <p>
              {actor.known_for.map((work) => (
                <span key={work.id}>
                  {work.original_title || work.original_name}
                  {', '}
                </span>
              ))}
            </p>
          </li>
        ))}
              */}
      </ul>
    </div>
  );
};

export default ActorList;

