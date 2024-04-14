// import React from 'react'
// import { Link} from 'react-router-dom'

// function User() {
//   return (
//     <div className=' m-auto  mt-20 w-1/4 bg-slate-100 p-4 '>
//       <h1 className='text-2xl font-bold mb-4 p-4' >User</h1>
//      <div className='mt-5 flex flex-col gap-5 bg-zinc-100'>
//      <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/nandan">Nandan</Link>
//      <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/johndoe">Jhon Doe</Link>
//      <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/williamson">Williamson</Link>
//      <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/justin">Justin</Link>
//      </div>
     
     
  
//     </div>


//   )
// }

// export default User


//..........................agar child compo same page par open karn hai to.........................................

import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function User() {
  return (
    <>
    <div className=' m-auto  mt-10 w-1/4 bg-slate-100 p-2 '>
      <h1 className='text-2xl font-bold mb-4 p-4' >User</h1>
     <div className='mt-5 flex flex-col gap-2 bg-zinc-100'>
     <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/nandan">Nandan</Link>
     <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/johndoe">Jhon Doe</Link>
     <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/williamson">Williamson</Link>
     <Link className='bg-zinc-300 hover:bg-zinc-400 px-3 py-2 text-lg font-semibold rounded-md' to="/user/justin">Justin</Link>
     </div>
    </div>
    <hr />
    <Outlet></Outlet>
    </>

  )
}

export default User