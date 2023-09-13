import React from 'react'
import style from "./kontakt.module.scss"
import FormError from '../components/FormError'
import {useForm  } from "react-hook-form"

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues,
      } = useForm()
    
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <div
    className={style.contact}
    >
        <h1>Login</h1>
        <form action="">
        <label>
          <span>
            Brugernavn:
            <span className={style.red}>*</span>
          </span>
            <input 
            {
                ...register("fullName" , {
                    required: "Full name is required"
                })
            }
            type="text" 
            />
            <FormError error={errors.fullName} />
          </label>
          <label>
            <span>
              Password:
              <span className={style.red}>*</span>
            </span>
            <input 
            {
                ...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: regex,
                        message: "Must provide a valid email"
                    }
                })
            }
            type="text" 
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
