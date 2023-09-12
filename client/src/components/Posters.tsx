import React, {useEffect, useState} from 'react'
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult, useInfiniteQuery } from 'react-query'
import { MovieProps } from '../types'
import style from "./Posters.module.scss"
import MovieCard from './MovieCard'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export default function Posters() {
  const { ref, inView } = useInView()
  const [searchParams, setSearchParams] = useSearchParams()
  const [noMore, setNoMore] = useState(false)
  const genre = searchParams.get("genre")
  
  const {data: infData, fetchNextPage, isFetchingNextPage, refetch, remove, hasNextPage} = useInfiniteQuery(
    ["infinite-query"],
    async({ pageParam = 0}) => {
      console.log(pageParam);
      
      const url = genre ? `http://localhost:4000/poster/list/${genre}?limit=10&page=${pageParam}` : `http://localhost:4000/poster/list?limit=10&page=${pageParam}`
      console.log(url);
      

      const {data: response}= await axios.get(url)
      
      console.log("data", response);
      
      if(!response[0]){
        setNoMore(true)
      }

      return response as MovieProps[]
    },
    {
      getNextPageParam: (_lastPages, pages) => {
        return pages.length + 1
      },
    },
  )

  useEffect(() => {
    if(inView) {
      fetchNextPage()
    }
  }, [inView])

  useEffect(() => {
    remove()
    refetch()
  }, [genre]);

  return (
    <section>
        <div className={style.posters}>
            {infData?.pages.map((page) => (
            <>
                {page.map(movie => (
                <MovieCard movie={movie} />
                ))}
            </>
            ))}
        </div>
        {infData?.pages[0] && !noMore && <div
        ref={ref}
        className='mx-auto'
        >
            Loading more...
        </div>}
    </section>
  )
}
