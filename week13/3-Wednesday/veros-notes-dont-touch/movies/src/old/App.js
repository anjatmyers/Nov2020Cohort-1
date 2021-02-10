import { useState, useEffect } from "react";
import MovieDetails from './MovieDetails'

function App() {
  const [movieData, setMovieData] = useState([]);
  const [cache, setCache] = useState({});
  const [currentMovie, setCurrentMovie] = useState({});
 

  useEffect(() => {
    const setData = async () => {
      const url =
        "http://www.omdbapi.com/?s=batman&i=tt3896198&apikey=390a6051";
        //www.omdbapi.com/?i=tt0372784&apikey=74b5f590
        // imdb id           ^^
        const reponse = await fetch(url);
      const data = await reponse.json();
      console.log(data);

      setMovieData(data.Search);
    };
    setData();
  }, []);


const handleClick = async (movie) => {

  //console.log(`logged data: ${JSON.stringify(cache)}`);

  if (cache[movie.imdbID] === undefined) {
    const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=74b5f590`;
    const response = await fetch(movieUrl);
    const data = await response.json();
    let id = movie.imdbID;
    
    let newCache = {...cache, [id]:data}

    setCurrentMovie(data)
    console.log('storing new data to cache table');
    setCache(newCache);

  } else {

    console.log('data coming from cache');
    setCurrentMovie(cache[movie.imdbID])
  }
}
return (
<div>

      {movieData.map((movie)=>{
        return (
          <button onClick={()=>handleClick(movie)}>
            <h3>{movie.Title}</h3>
            <img height="150px" src={movie.Poster} alt=""/>
          </button>
        )
      })}

      <MovieDetails details={currentMovie}/>
</div>)
}
export default App;
