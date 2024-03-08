// import React, { useState } from 'react'

// function App() {
//   const [Score,setScore]=useState(12)
//   const updateScore =()=>setScore(30)
//   return (
//     <div className='p-3'>
//       <h1>{Score}</h1>
//       <button onClick={updateScore} className='px-2 py-1 rounded-full mt-2 text-xs bg-blue-600 text-white'>Change Score</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {
//   const [Banned,setBanned]=useState(false)
//   return (
//     <div className='p-5'>
//        <h1>{Banned.toString()}</h1>
//        <button onClick={()=>setBanned(!Banned)} className='px-2 py-1 rounded-full mt-2 text-xs bg-blue-600 text-white'>Banned it</button>
//     </div>
//   )
// }

// export default App
//! mark matlab ulta false ka ulta true 


//----------------------------- INTERMEDIATE useState() -------------------------------------

// in this we can received previous value and do update in setVal



// import React, { useState } from 'react'

// function App() {
//  const [val,setVal] = useState(0)
//   return (
//     <div className='p-5'>
//       <h1>{val}</h1>
//       <button onClick={()=>setVal((prev)=>prev + 1)} className='px-2 py-1 rounded-full text-white text-xs bg-blue-600 mt-3'>Change</button>
//     </div>
//   )
// }

// export default App


//---------------------------------------------------------------------------------------------------------------------------


// import React, { useState } from 'react'

// function App() {
// const [val,setVal] = useState({
//     name:"nandan",
//     isBanned:false
//   })
//   return (
//     <div className='p-5'>
//       <h1>Name:{val.name}</h1>
//       <h2 className='mt-2'>isBanned:{val.isBanned.toString()}</h2>
//       <button onClick={()=>setVal({...val,isBanned:(!val.isBanned)})} className={
//         `px-2 py-1 rounded-md ${val.isBanned ? "bg-blue-500" : "bg-red-500"} text-xs text-white mt-3`}>
//           Update
//         </button>
//     </div>
//   )
// }

// export default App

//setVal(!val.isBanned)---is not good so plz follow above

//.............................................................................................

//react apni state turant nahi update karta 

// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] = useState({
//     name:"nandan",
//     age:21
//   })
//   return (
//     <div className='p-8'>
//       <button onClick={
//         ()=>{
//           setVal({...val,gender:"male"})
//           console.log(val);
//         }
//       }
//        className='px-2 py-1 bg-slate-600 text-xs text-white border-none rounded-md'>Click</button>
//     </div>
//   )
// }

// export default App


//..........................................................................................
//useState() with Array


// import React, { useState } from 'react'

// function App() {
//  const[val,setVal]  = useState([1,2,3,4,5,6])
//   return (
//     <div  className='p-5'>
//       {val.map((item,index)=><h1 key={index}>{item}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=> index != val.length-1))} className='px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react'

// function App() {
//  const[val,setVal]  = useState([1,2,3,4,5,6])
//   return (
//     <div  className='p-5'>
//       {val.map((item,index)=><h1 key={index}>{item}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=>index!=2))} className='px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from 'react'

// function App() {
//  const[val,setVal]  = useState([1,2,3,4,5,6])
//   return (
//     <div  className='p-5'>
//       {val.map((item,index)=><h1 key={index}>{item}</h1>)}
//       <button onClick={()=>setVal(()=>val.filter((item)=>item %=2))} className='px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App


//-------------------------------------------------------------------------------------------------------------------------

//Arrays Addition


// import React, { useState } from 'react'

// function App() {
//  const[val,setVal]  = useState([1,2,3,4,5,6])
//   return (
//     <div  className='p-5'>
//       {val.map((item,index)=><h1 key={index}>{item}</h1>)}
//       <button onClick={()=>setVal([...val,7])} className='px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App

//....................................................................................................................

// import React, { useState } from 'react'

// function App() {
//  const[val,setVal]  = useState([
//   {Product:"Smartphone" , price:12000},
//   {Product:"Telivision" , price:15000},
//   {Product:"Laptop" , price:50000}
//  ])
//   return (
//     <div  className='p-5'>
      
//         {val.map((item)=>
//           <div>
//             <h1 >{item.Product}</h1>
//             <h2>{item.price}</h2>
//           </div>
          
//         )}
  
//       <button onClick={()=>setVal(val.map((item)=> item.Product==="Telivision"? {Product:"Telivision",price:20000}:item))}  className='px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App


//........................ UseState() Hooks ..............................................



// import React, { useState } from 'react'

// function App() {
//  const [val,setVal] = useState(false)
//   return (
//     <div>
//      <h1>value:{val.toString()}</h1>
//      <button onClick={()=>setVal(()=>!val)} className='px-2 py-1 bg-blue-600 rounded-full text-xs text-white'>Click</button>
//     </div>
//   )
// }

// export default App

//ye ()=> !val ye acchi practice hoti hai practice purpose ke liye sirf setVal(!val) kar ke ho sakta hai

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  const [val , setVal] = useState(false)
  return (
    <div className=' w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='w-60 h-32 relative flex bg-zinc-500 rounded-md  overflow-hidden '>
            <img className={` shrink-0 w-full h-full object-cover transition-transform duration-300 ease-out ${val=== false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1709496023433-96b349a55946?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={` shrink-0 w-full h-full object-cover transition-transform duration-300 ease-out ${val=== false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1527086983597-b4d44c4a66d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=>setVal(()=>!val)} className={`${val===false ? "rotate-0" : "rotate-180"} absolute w-8 h-8 rounded-full bg-[#dadada8b] bottom-[1%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center `}>
            <FaArrowRightLong />
            </span>
        </div>
    </div>
  )
}

export default App






