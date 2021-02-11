import React, { useState, useEffect, useMemo } from "react";
import MovieDetail from "./MovieDetail";

const getMovieDetail = async (movieID) => {
  const apiData = await fetch(
    `http://www.omdbapi.com/?i=${movieID}&apikey=74b5f590`
  );
  const data = await apiData.json();
  console.log("fetching new data: ", Date.now());
  return data;
};

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [cache, setCache] = useState({});
  const [movieID, setMovieID] = useState("");

  const details = useMemo(async () => {
    if(cache[movieID] === undefined){
      let data = await getMovieDetail(movieID);
      console.log(`data ${data}`);
      setCache({...cache, [movieID]: data});
      setCurrentMovie(movieID);
    }
    else{
      console.log("getting cached data: ", Date.now());
      setCurrentMovie(cache[movieID]);
    }
  }, [movieID]);

  useEffect(() => {
    const getMovieData = async () => {
      let apiCall = await fetch(
        "http://www.omdbapi.com/?s=batman&i=tt3896198&apikey=390a6051"
      );
      let data = await apiCall.json();
      //data.Search

      setMovieData(data.Search);
    }; //  end getMovieData

    getMovieData();

    console.log(movieData);
  }, []); //end of useEffect

  return (
    <>
      <h2>App with Memoization</h2>
      {movieData.map((movieObj) => {
        return (
          <button
            key={movieData.imdbID}
            onClick={() => setMovieID(movieObj.imdbID)}
          >
            <h3>{movieObj.Title}</h3>
            <img height="150px" src={movieObj.Poster} alt="" />
          </button>
        );
      })}

      <MovieDetail movie={currentMovie} />
    </>
  );
};

export default App;
