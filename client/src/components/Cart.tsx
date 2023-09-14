import React, { useEffect, useState } from 'react'
import { BiSolidCartAlt } from 'react-icons/bi'
import style from "./Cart.module.scss"
import { useQuery } from 'react-query'
import axios from 'axios'
import { CartMovieProps, MovieProps } from '../types'
import { useLogin } from '../store/userStore'

export default function Cart({
    open,
    setOpen
} : {
    open: boolean
    setOpen: () => void
}) {
    const [data, setData] = useState<CartMovieProps[]>([])
    const [error, setError] = useState("")
    const {user} = useLogin()

    const {isLoading, refetch} = useQuery({
      queryFn: async () => {
        console.log(user);
        
        if(user?.access_token){
            const {data} = await axios.get("http://localhost:4000/cart", {
                headers: {
                    Authorization: `Bearer ${user?.access_token}`
                }
            })
            
            return data
        } else {
            return []
        }
        
      },
      onSuccess: (d: CartMovieProps[]) => {
        console.log(d);
        
        setData(d)
      },
      onError: () => {
        setError("kunne ikke få fat i dataen prøv of refresh siden eller kom tilbage senere.")
      },
      queryKey: ["cart"]
    })

    useEffect(() => {
      refetch()
    }, [open, user])
    

  return (
    <>
        <BiSolidCartAlt 
        onClick={() => setOpen()}
        />
        {open && (
            <div
            className={style.cartModal}
            >
                {data[0] && data.map((item) => (
                    <div className={style.cartCard}>
                        <img src={item.poster.image} alt={item.poster.name + " " + "poster"} />
                        <div>
                            <h3>
                                {item.poster.name}
                            </h3>
                            <p>
                                {item.poster.price} dkk
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}
