import React, { useContext } from "react";
import { userContext } from "../context/Context";
import { useParams ,useNavigate } from "react-router-dom";



const UserDetails = () => {
  const navigate = useNavigate()
 const {id} = useParams()
  const {user} = useContext(userContext)
  
  return <div>
   <h1 className=" text-red-400 font-bold text-4xl">{user[id].username}</h1>
   <h3 className=" text-red-400  text-2xl mt-4">{user[id].country}</h3>
   <button onClick={()=> navigate(-1)} className="bg-red-600 px-4 py-2 rounded-md text-white mt-4">Go Back</button>
  </div>;
};

export default UserDetails;
