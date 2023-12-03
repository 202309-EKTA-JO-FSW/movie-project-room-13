import React, { useState, useEffect } from 'react'

function SinglePageMovie(id){
    const [moiveId , setMovieId ] = useState(null)
    const apiKey = ""

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${moiveId}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
    })
    },[])
}

export default SinglePageMovie