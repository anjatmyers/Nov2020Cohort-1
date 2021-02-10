
import React, {useState, useEffect} from 'react'
import MovieDetail from './MovieDetail'


/**
 * 1. fetch our movie data
 * 2. store our data inside state 
 * 3. map through data display movie list 
 * 4. attach to each movie a event listenter with imdbID 
 * 5. when user click on movie, el will be fired: make a call the movie api with id
 * 6. set details of clicked on movie to antothe state variable 
 * 7. when state variable is updated 
 * 8. re-render our app, which will pass new info to child : MovieData
 * 
 */
const App = () => {

    const [movieData, setMovieData] = useState([]);
    const [currentMovie, setCurrentMovie] = useState({});
    const [cache, setCache] = useState({})

  useEffect(() => {
    
    const getMovieData = async() => {
        
        let apiCall = await fetch('http://www.omdbapi.com/?s=batman&i=tt3896198&apikey=390a6051');
        let data = await apiCall.json();
        //data.Search 

        setMovieData(data.Search);
    }//  end getMovieData

    getMovieData();

    console.log(movieData);

  }, [])//end of useEffect

  const handleClick = async (movie) => {
      console.log('clicked', movie);

      //make api call here based on the clicked movie

        // let cache = {
        //     "tt4567" : {},
        //     "tt7896" : {}
        // }

    if(cache[movie.imdbID] === undefined )
    {
        //make an api call

        //store the new key in our cache 

        // setCurrentMovie()
        
        const apiData = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=74b5f590`);
        const data = await apiData.json();

        setCurrentMovie(data);
        let id = movie.imdbID;

        let newCache = {...cache, [id]: data}

        console.log('making a new api call');
        setCache(newCache)
    }
    else{

        console.log('getting data from cache');
        //retrieve the data from cache 
        
        //setCurrentMovie
        setCurrentMovie(cache[movie.imdbID])

    }

  }

  return (
    <>
      {movieData.map(movieObj=>{
        return (<button key={movieData.imdbID} onClick={()=> handleClick(movieObj)}>

                <h3>{movieObj.Title}</h3>
                <img height="150px" src={movieObj.Poster} alt=""/>
            </button>)
      })}


      <MovieDetail movie={currentMovie} />
    </>
  )
}

export default App


// let cache = {
//     "tt4567" : {},
//     "tt7896" : {}
// }
