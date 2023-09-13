import React from 'react'
import style from "./kontakt.module.scss"
import type {FieldValues} from "react-hook-form"
import FormError from '../components/FormError'
import {useForm  } from "react-hook-form"
import axios from 'axios'

export default function Login() {
  const {
      register,
      handleSubmit,
      formState: {errors, isSubmitting},
      reset,
      getValues,
    } = useForm()
    
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const onSubmit = async (data: FieldValues) => {
        console.log(data);
        const d = await axios.post("http://localhost:4000/login", data)
        console.log(d);
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
          <button
          className='btn'
          >
            Login
          </button>
        </form>
    </div>
  )
}
