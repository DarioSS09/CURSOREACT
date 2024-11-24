import React from 'react';
import './CSS/MovieList.css';

const MovieList = (props) => {
  const movies = props.peliculas.map((pelicula, index) => (
    <div key={pelicula.id || index}> {/* Añade key aquí */}
      <img 
        src={pelicula.imgUrl} 
        alt={pelicula.nombre} 
        style={{ borderRadius: '10px' }} 
      />
      <h2>{pelicula.nombre}</h2>
      <p>{pelicula.fecha}</p>
    </div>
  ));

  return (
    <>
      {movies}
    </>
  );
};

export default MovieList;