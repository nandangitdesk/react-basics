import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-4 justify-between items-center flex'>
      <h1 className='text-2xl text-orange-500 font-semibold'>Favouritly.</h1>
      <div className='bg-orange-500 px-4 py-2 justify-center text-white gap-2 rounded-md flex items-center'>
        <h2 className=' text-sm'>Favourites</h2>
        <h2 className='text-sm font-semibold  '>{data.filter(item => item.added).length}</h2>
      </div>
    </div>
  )
}

export default Navbar
