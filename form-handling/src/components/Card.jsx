import React from 'react';

function Card({ user ,id ,handleRemove }) {
  const { name, email, image } = user;

 

  return (
    <div className='w-44 bg-zinc-50 flex flex-col rounded-lg p-4 justify-center items-center'>
      <div className='h-12 w-12 bg-zinc-300 rounded-full  overflow-hidden'>
        <img className='h-full w-full object-cover' src={image} alt={`${name}'s profile`} />
      </div>
      <h2 className='text-xl font-semibold mt-2 text-center leading-none'>{name}</h2>
      <h4 className='text-xs font-semibold opacity-55'>{email}</h4>
      <p className='opacity-90 font-semibold text-xs leading-1 tracking-tight text-center mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequatur!
      </p>
      <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 text-white text-xs rounded-md mt-3'>
        Remove It
      </button>
    </div>
  );
}

export default Card;
