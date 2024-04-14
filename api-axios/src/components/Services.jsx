import React, { useEffect, useState } from "react";
import axios from "../components/axios"

const Services = () => {
  const [first, setFirst] = useState("this is Normal data");
  const [second, setSecond] = useState("this is Large data");

  useEffect(() => {
    getUsers()
    console.log("Service is created!");

    return () => {
      console.log("Service is Delelted!");
    };
  },[second]);
  //yaha [] lagate hi react, component ko re-render nahi karega only updation hoga
  //hum jo-jo chije ko change kar rahe hai ye sirf unko update karega re-render nahi karega
  //agar hum [second] bracket me naam likh de or kuch changes kare uss element me to useEffect allow karega service component ko re-render hone me

  const getUsers = () => {
    // const Api = "https://fakestoreapi.com/users";

    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>
     <h5>{first}</h5>
     <button onClick={()=>setFirst("normal data changed")} className="px-4 py-2 bg-red-400 text-white font-semibold rounded-full">change Normal data</button>
     <h5 className="mt-10">{second}</h5>
     <button onClick={()=>setSecond("Large data changed")} className="px-4 py-2 bg-sky-400 text-white font-semibold rounded-full">change Large data</button>
  </div>;
};

export default Services;
