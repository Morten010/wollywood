import style from "./Filters.module.scss"
import { useSearchParams } from 'react-router-dom'
 
const genres = [
    {title:"Drama",slug:"drama"},
    {title:"Science fiction",slug:"science-fiction"},
    {title:"Komedie",slug:"komedie"},
    {title:"Action",slug:"action"},
    {title:"Adventure",slug:"adventure"},
    {title:"Walt Disney - Pixar",slug:"walt-disney"},
    {title:"Krigsfilm",slug:"krigsfilm"},
    {title:"Dokumentar",slug:"dokumentar"},
    {title:"Krimi - Thriller",slug:"krimi-thriller"},
    {title:"Karatefilm",slug:"karatefilm"},
]
    

export default function Filters() {
    const [_searchParams, setSearchParams] = useSearchParams()
  return (
    <div className={style.filter}>
        <h2>filtre</h2>
        <div className={style.genre}>
            {genres.map(genre => (
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
