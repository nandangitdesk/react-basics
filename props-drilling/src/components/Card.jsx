// import React from 'react'

// function Card({text,color}) {
//   return (
//     <div>
//       <button className={`px-3 py-1 text-white text-xs rounded-md ${color}`}>{text}</button>
//     </div>
//   )
// }

// export default Card


// import React from 'react'

// function Card({values,handleFriendsButton,index}) {
//     const {image,name,profession,friends} = values
//   return (
//     <div className='w-60 bg-white rounded-md overflow-hidden'>
//       <div className='w-full h-40 bg-zinc-400'>
//         <img className='w-full h-full  object-cover' src={image} alt="" />
//       </div>

//       <div className='p-3 w-full'>
//         <h1 className='text-xl font-semibold '>{name}</h1>
//         <p className=' text-sm'>{profession}</p>
        
//       <button onClick={()=>handleFriendsButton(index)} className={`${friends ? "bg-green-500" : "bg-blue-500"} text-white text-xs px-3 py-1 rounded-md mt-4`}>{friends === true ? "friends" : "Add friend"}</button>
//       </div>
//     </div>
//   )
// }

// export default Card


import React from 'react'

function Card({values,handleClick,index}) {
  const{image,name,artist,added} = values
  return (
    <div className='w-60 bg-white p-4 pb-8 rounded-md flex gap-4 relative m-10'>
      <div className='bg-orange-400 w-20 h-20 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div >
        <h2 className='text-lg font-semibold whitespace-nowrap'>{name}</h2>
        <h3 className='text-xs whitespace-nowrap'>{artist}</h3>
      </div>
      <button onClick={()=>handleClick(index)} className={`px-4 py-2 ${added===false ? "bg-orange-500 " : "bg-teal-500"} text-white text-xs rounded-full whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added===false ? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default Card
