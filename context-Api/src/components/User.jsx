import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/Context";


// import UserDetails from './UserDetails'

const User = () => {
  
   const {user,setUser} = useContext(userContext)
   
  return (
    <div className="mt-10 text-center">
      <h1 className="font-semibold text-3xl ">Users List</h1>
      <div className="mt-10 flex flex-col w-fit m-auto ">
      {user.map((u) => (
        <Link key={u.id}
        to={`/user/${u.id}`}
        className="bg-zinc-500 text-white px-6 py-3 rounded-md  font-semibold mt-5"
      >
        {u.username}
      </Link>
      ))}
      </div>
    </div>
  );
};

export default User;
