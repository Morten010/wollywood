import React from 'react'
import { MovieProps } from '../types'
import style from "./MovieCard.module.scss"

export default function MovieCard({movie}: {
    movie: MovieProps
}) {
  

  return (
    <div
    className={style.card}
    >
      <a
      href={`/plakater?slug=${movie.slug}`}
      >
        <img src={movie.image} alt={movie.name + " " + "poster"} loading='lazy' />
      </a>
      <h2>{movie.name}</h2>
      <p>kr. {movie.price}</p>
      <button
      className='btn'
      >
          Læg i kurv
      </button>
    </div>
  )
}
