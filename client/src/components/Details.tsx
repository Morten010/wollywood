import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { MovieDetails, MovieProps } from '../types'
import axios from 'axios'
import style from "./Details.module.scss"
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import DOMPurify from 'dompurify';

export default function Details() {
    const [data, setData] = useState<MovieDetails>()
    const [error, setError] = useState("")
    const [amount, setAmount] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const slug = searchParams.get("slug")
    console.log(slug);

    
    const {isLoading} = useQuery({
        queryFn: async () => {
          const {data} = await axios.get(`http://localhost:4000/poster/details/${slug}`)
          console.log(data);
          
          return data
        },
        onSuccess: (d: MovieDetails) => {
          setData(d)
        },
        onError: () => {
          setError("kunne ikke få fat i dataen prøv of refresh siden eller kom tilbage senere.")
        },
        queryKey: ["home"]
      })
      console.log(data);
      
      if(isLoading){
        return <p>Loading...</p>
      }

      if(!data){
        return <p>Kunne ikke få fat på den valgte plakat</p>
      }
    
  return (
    <div className={style.details}>
        <img src={data.image} alt={data.name + " " + "poster"} />
        <div
        className={style.text}
        >
            <h2>
                {data.name}
            </h2>
            <p>
                {data.description ? (
                    <section
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.description)
                    }}
                    />
                ) : "Ingen description"}
            </p>
            <p>
                størelse: {data.height} x {data.width}
            </p>
            <p>Varenummer (sku): 2104</p>
            <div
            className={style.buy}
            >
                <div
                className={style.left}
                >
                    <input 
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.currentTarget.value))}
                    placeholder='0'
                    />
                    <button
                    className='btn'
                    >
                        Put i kurv
                    </button>
                </div>
                <p
                className={style.right}
                >
                    <BsFillEmojiSmileFill />
                    {data.stock} på lager
                </p>
            </div>
        </div>
    </div>
  )
}
