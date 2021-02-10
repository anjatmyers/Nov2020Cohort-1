import React from "react";


const MovieDetails = (props) => {

    console.log(props.movie);

    const {Poster, Title, Year, Rated, Director} = props.movie;
  return <>
    <h3>{Title}</h3>
    <img height="200px" src={Poster} alt=""/>
    <div>{Director}</div>
    <div>{Rated}</div>
    <div>{Year}</div>
  </>;
};

export default MovieDetails;
