import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleFormSubmit}) {
  const {register,handleSubmit,reset} = useForm();

const submitForm = (data) =>{
 handleFormSubmit(data);
 reset();
}

  return (
    <div className='mt-10 flex justify-center'>

      <form className='flex gap-10' onSubmit={handleSubmit(submitForm)} >
        <input {...register("name")} className='outline-none px-2 py-1  text-base rounded-md font-semibold  ' type="text" placeholder='name' />
        <input {...register("email")} className='outline-none px-2 py-1  text-base rounded-md font-semibold ' type="text" placeholder='email' />
        <input {...register("image")} className='outline-none px-2 py-1 text-base rounded-md  font-semibold' type="text" placeholder='image url' />
        <input  className='px-5 py-1 bg-blue-500 rounded-lg cursor-pointer  font-semibold text-white' type="submit" value="sumbit" />
      </form>
      
    </div>
  )
}

export default Form
