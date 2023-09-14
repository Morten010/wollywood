import React, {useState} from 'react'
import style from "./kontakt.module.scss"
import type {FieldValues} from "react-hook-form"
import FormError from '../components/FormError'
import {useForm  } from "react-hook-form"
import axios from 'axios'
import { useLogin } from '../store/userStore'
import { Navigate, redirect } from 'react-router-dom'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const {
      register,
      handleSubmit,
      formState: {errors, isSubmitting},
      reset,
      getValues,
    } = useForm()
    
    const {setLogin, user} = useLogin()
    if(user){
      return <Navigate to="/" />
    }    
    
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const onSubmit = async (data: FieldValues) => {
      setIsLoading(true)
        console.log(data);

       try{
        const d = await axios.post("http://localhost:4000/login", data)
        setLogin(d.data)
        setIsLoading(false)
        setSuccess("Sucessfuldt login")
       }catch(err){
        console.log(err);
        setError("could not login")
       }
    }

  return (
    <div
    className={style.contact}
    >
        <h1>Login</h1>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        >
        <label>
          <span>
            Brugernavn:
            <span className={style.red}>*</span>
          </span>
            <input 
            {
                ...register("username" , {
                    required: "Mangler brugernavn"
                })
            }
            type="text" 
            />
            <FormError error={errors.username} />
          </label>
          <label>
            <span>
              Password:
              <span className={style.red}>*</span>
            </span>
            <input 
            {
                ...register("password", {
                    required: "Mangler password",
                })
            }
            type="password" 
            />
            <FormError error={errors.email} />
          </label>
          {error && (
            <p
            style={{color: "red"}}
            >
              {error}
            </p>
          )}
          {success && (
            <p
            style={{color: "green"}}
            >
              {success}
            </p>
          )}
          <button
          className='btn'
          disabled={isLoading || !!success}
          >
            Login
          </button>
        </form>
    </div>
  )
}
