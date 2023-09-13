import { genresList } from "../constants"
import style from "./Filters.module.scss"
import { useSearchParams } from 'react-router-dom'
     

export default function Filters() {
    const [_searchParams, setSearchParams] = useSearchParams()
  return (
    <div className={style.filter}>
        <h2>filtre</h2>
        <div className={style.genre}>
            {genresList.map(genre => (
                <button
                onClick={() => setSearchParams({
                    genre: genre.slug
                })}
                >
                    {genre.title}
                </button>
            ))}
        </div>
    </div>
  )
}
