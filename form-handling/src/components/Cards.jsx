import React from 'react';
import Card from './Card';

function Cards({ users,index,handleRemove }) {
  return (
    <div className='w-full p-4 rounded-lg flex items-center justify-center flex-wrap gap-4 max-h-60 overflow-auto'>
      {users.map((user, index) => (
        <Card key={index} user={user} id={index} handleRemove={handleRemove} />
      ))}
    </div>
  );
}

export default Cards;
