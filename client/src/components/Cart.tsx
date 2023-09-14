import React, { useState } from 'react'
import { BiSolidCartAlt } from 'react-icons/bi'
import style from "./Cart.module.scss"
import { useQuery } from 'react-query'
import axios from 'axios'
import { MovieProps } from '../types'
import { useLogin } from '../store/userStore'

export default function Cart({
    open,
    setOpen
} : {
    open: boolean
    setOpen: () => void
}) {
    const [data, setData] = useState<MovieProps[]>([])
    const [error, setError] = useState("")
    const {user} = useLogin()

    const {isLoading} = useQuery({
      queryFn: async () => {
        const {data} = await axios.get("http://localhost:4000/cart", {
            headers: {
                Authorization: `Bearer ${user?.access_token}`
            }
        })
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
    <>
        <BiSolidCartAlt 
        onClick={() => setOpen()}
        />
        {open && (
            <div
            className={style.cartModal}
            >
                {data[0] && data.map((item: MovieProps) => (
                    <div className={style.cartCard}>
                        <img src={item.image} alt={item.name + " " + "poster"} />
                        <div>
                            <h3>
                                {item.name}
                            </h3>
                            <p>
                                {item.price} dkk
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}
