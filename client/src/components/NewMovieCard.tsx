import { MovieProps } from "../types"
import style from "./NewMovieCard.module.scss"

export default function NewMovieCard({
    movie
}: {
    movie: MovieProps
}) {
    
  return (
    <div className={style.movieCard}>
        <img 
        src={movie.image}
        alt={movie.image}
        />
        <div className={style.details}>
            <h3>
                {movie.name}
            </h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem, unde totam accusantium sit eveniet soluta laboriosam nesciunt odio voluptas!
            </p>
            <p>Genre: action, sciFi</p>
            <a
            href={`/plakater?slug=${movie.slug}`}
            className="btn"
            >
                se mere
            </a>
        </div>
    </div>
  )
}
