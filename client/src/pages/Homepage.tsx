import axios from "axios"
import NewMovieCard from "../components/NewMovieCard"
import style from "./Homepage.module.scss"
import { useQuery } from "react-query"
import { useState } from "react"
import { MovieProps } from "../types"

export default function Homepage() {
  const [data, setData] = useState<MovieProps[]>([])
  const [error, setError] = useState("")

  const {isLoading} = useQuery({
    queryFn: async () => {
      console.log("ran");
      
      const {data} = await axios.get("http://localhost:4000/poster/list?limit=2")

      console.log(data);
      
      return data
    },
    onSuccess: (d: MovieProps[]) => {
      console.log(d);
      
      setData(d)
    },
    onError: () => {
      setError("kunne ikke få fat i dataen prøv of refresh siden eller kom tilbage senere.")
    },
    queryKey: ["home"]
  })
  return (
    <main className='container'>
        <img src="/curtains.webp" alt="Cinema curtains" className={style.image} />
        <section>
            <h2>Sidste nyt...</h2>
            <div
            className={style.movies}
            >
              {data && data.map(movie => (
                <NewMovieCard movie={movie} />
              ))}
              {isLoading && (
                <p>
                  loading...
                </p>
              )}
              {!isLoading && error && (
                <p>
                  {error}
                </p>
              )}
            </div>
        </section>
    </main>
  )
}
