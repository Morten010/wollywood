import React from 'react'
import { useForm } from 'react-hook-form'
import FormError from '../components/FormError'
import style from "./Kontakt.module.scss"

export default function Kontakt() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues,
  } = useForm()

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  return (
    <div className={style.contact}>
      <h1>Kontakt os</h1>
      <form>
        <label>
          <span>
            Dit Navn:
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
              din email:
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
          <label>
            <span>
              Din besked:
              <span className={style.red}>*</span>
            </span>
            <textarea
            rows={10}
            {
                ...register("comment", {
                    required: "Comment is required",
                    minLength: {
                        value: 20,
                        message: "Comment must be atleast 20 characters long"
                    },
                    maxLength: {
                        value: 200,
                        message: "Comment must be atleast 200 characters long"
                    }
                })
            }
            />
            <FormError error={errors.comment} />
          </label>
          <button
          className='btn'
          >
            Send
          </button>
        </form>
    </div>
  )
}
