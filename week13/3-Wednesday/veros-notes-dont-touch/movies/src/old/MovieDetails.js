import React from "react";
function MovieDetails(props) {
  console.log(props.details);
  const { Poster, Title, Year, Rated, Director } = props.details;
  return (
    <>
      <h3>{Title}</h3>
      <img height="200px" src={Poster} alt="" />
      <div>{Director}</div>
      <div>{Rated}</div>
      <div>{Year}</div>
    </>
  );
}
export default MovieDetails;
