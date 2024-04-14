// import React, { useRef } from 'react'

// function App() {
//   const name = useRef(null)
//   const age = useRef(null)
//   const email = useRef(null)

//   const handleClick = (event)=>{
//     event.preventDefault()
//     console.log(name.current.value , age.current.value , email.current.value );
//   }


//   return (
    
//     <div className='p-8 '>

//       <form className='flex gap-6' action="" onSubmit={handleClick}>

//       <input ref={name} className='border-2' type="text" placeholder='Name' />
//       <input ref={age} className='border-2' type="number" placeholder='Age' />
//       <input ref={email} className='border-2' type="email" placeholder='Email' />
//       <input className='border-2 bg-black px-2 py-1 text-white' type="submit" value="submit" />

//       </form>

//     </div>
//   )
// }

// export default App


//----------------------------------by useForm - REact hook form ----------------------------------------------

// import React from 'react'
// import {useForm} from 'react-hook-form'

// function App() {
//  const {register,handleSubmit} = useForm()

//   return (
//     <div className='p-10'>
//       <form action="" onSubmit={handleSubmit((data)=>console.log(data))}>
//         <input {...register('name')} type="text" placeholder='name' className='border-2 rounded-md mr-4' />
//         <input {...register('email')} type="email" placeholder='email' className='border-2 rounded-md mr-2' />
//         <input type="submit" value="submit" className='px-3 py-1 bg-blue-500 text-sm text-white rounded-md' />
//       </form>
//     </div>
//   )
// }

// export default App


//------------------------------EXERCISE---------------------------------------------------//

import React, { useState } from 'react'
import Cards from './components/Cards'

import Form from './components/Form'

function App() {
  const [users,setUsers] = useState([])

  const handleFormSubmit = (data)=>{
    setUsers([...users,data])
  }
 
  const handleRemove = (id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }
  
  return (
    <div className='h-screen w-full bg-zinc-200 flex items-center justify-center p-4'>
      
      <div className='container mx-auto'>
      <Cards  users={users} handleRemove={handleRemove}/>
      <Form handleFormSubmit={handleFormSubmit} />
      </div>
      
    </div>
  )
}

export default App

