import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { MovieDetails } from '../types'
import axios from 'axios'
import style from "./Details.module.scss"
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import DOMPurify from 'dompurify';
import { useMutation } from 'react-query'
import { useLogin } from '../store/userStore'




export default function Details() {
    const [data, setData] = useState<MovieDetails>()
    const [error, setError] = useState("")
    const [amount, setAmount] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const slug = searchParams.get("slug")
    const {user} = useLogin()

    //add poster to cart
    const {data: cartData, mutateAsync: putInCart, isError, isSuccess} = useMutation({
      mutationFn: async ({
        amount,
        bearerToken,
        productId
      }: {
        productId: number, amount: number, bearerToken: string
      }) => {
        const res = await axios.post("http://localhost:4000/cart", {
          poster_id: productId,
          quantity: amount,
        }, {
          headers: {
            Authorization: `Bearer ${bearerToken}`
          }
        })
        return res
      }
    })

    //get poster
    const {isLoading} = useQuery({
        queryFn: async () => {
          const {data} = await axios.get(`http://localhost:4000/poster/details/${slug}`)
          console.log(data);
          
          return data
        },
        onSuccess: (d: MovieDetails) => {
          setData(d)
        },
        onError: (err) => {
          setError("kunne ikke få fat i dataen prøv of refresh siden eller kom tilbage senere.")
          console.log(err);
          
        },
        queryKey: ["details"]
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
                    onClick={() =>  user ? putInCart({
                      amount: amount,
                      bearerToken: user.access_token,
                      productId: data.id,
                    }) : null}
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
