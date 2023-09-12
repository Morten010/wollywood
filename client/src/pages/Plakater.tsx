import style from "./Plakater.module.scss"
import Filters from '../components/Filters'
import { useSearchParams } from 'react-router-dom'
import Posters from '../components/Posters'
import Details from '../components/Details'
import { useRef } from "react" 

export default function Plakater() {
  const [searchParams, setSearchParams] = useSearchParams()
  const slug = searchParams.get("slug")
  const parentRef = useRef<HTMLElement>(null)

  // The virtualizer

  
  return (
    <main
    ref={parentRef}
    >
        <h1>
          Plakater
        </h1>
        <div className={style.content}>
          <Filters />
          {!slug && <Posters />}      
          {slug && <Details />}   
        </div>
    </ main>
  )
}
