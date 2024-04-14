import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
  const {name} = useParams()
  const navigate = useNavigate()

 const GoBackHandler = ()=>{
    //  navigate("/user")
    navigate(-1)
 }

  return (
    <div className=' m-auto  mt-10 w-1/3 bg-slate-100 p-4'>
    <h1 className='text-2xl font-semibold mb-4' >User Details</h1>
    <h2 className='text-xl font-medium text-gray-400'>Hii! 👋 {name}</h2>
    <button onClick={GoBackHandler} className='px-3 py-2 text-xs mt-4 rounded-md bg-slate-700 text-white'>Go Back</button>
  </div>
  )
}

export default UserDetails    