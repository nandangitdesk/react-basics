// import React from 'react'
// import Card from './components/Card'

// function App() {
//   return (
//     <div className='m-5'>
//       <Card text="download" color="bg-blue-500"/>
//       <Card text="Know More ?" color="bg-purple-500"/>

//     </div>
//   )
// }

// export default App


// example:  Actually hamara data main component me hoga usse hame props ke through pass karke cards me use karna hai,
// har ek card par add friend naam ka ek button hoga button ke click par event chalana hai , ex : alert 


// import React, { useState } from 'react'
// import Card from './components/Card'


// function App() {
//   const data = [
//     {name:"Johnnie" , profession:"Developer" , image:"https://www.shutterstock.com/image-photo/express-positive-human-emotions-mature-600nw-1883255677.jpg",friends:false},
//     {name:"Anjali", profession:"Fashion Designer" , image:"https://media.istockphoto.com/id/1427986836/photo/mid-adult-woman-in-rural-landscape-close-up.jpg?s=612x612&w=0&k=20&c=d9j3rM34c8K8frH7NG79hs_7UB5ZQb7bmwz34xN8WTU=",friends:false},
//     {name:"Virat Kohli" , profession:"Cricketer" , image:"https://resize.indiatvnews.com/en/resize/newbucket/400_-/2023/01/world-cup-1675151271.jpg",friends:false}
//   ]
//   const [realData,setRealData] = useState(data)

//   const handleFriendsButton = (cardIndex)=>{
//         setRealData((previous)=>{
//        return   previous.map((item,index)=>{
//             if(index === cardIndex){
//                  return {...item,friends: !item.friends}
//               }
//               return item
//           })
//         })
//   }
  
//   return (
//     <div className='w-full h-screen bg-zinc-300 items-center justify-center flex gap-10'>
//       {realData.map((item,index)=>(
//         <Card key={index} index={index} handleFriendsButton={handleFriendsButton} values={item}/>
//       ))}
//     </div>
//   )
// }

// export default App

//<Card image={item.image}  name={item.name} profession={item.profession}/> ye baar baar likne se accha isse hum ek variable me dal denge


//practice

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {

  const data = [
    {name:"Main Hoon Na",artist:"Sonu Nigam",image:"https://c.saavncdn.com/388/Main-Hoon-Na-Hindi-2004-20221202051448-500x500.jpg",added:false},
    {name:"Zara Sa",artist:"KK",image:"https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-500x500.jpg",added:false},
    {name:"Satranga",artist:"Arijit Singh",image:"https://c.saavncdn.com/415/Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg",added:false},
    {name:"Badass",artist:"Anirudh Ravichander",image:"https://st1.latestly.com/wp-content/uploads/2023/09/Leo-Song-Badass.jpg",added:false},
    {name:"Zingaat",artist:"Ajay , Atul",image:"https://c.saavncdn.com/998/Sairat-Marathi-2016-500x500.jpg",added:false},
  ]
  const [songData,setSongData] = useState(data)
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((cardItem,cardIndex)=>{
       if(cardIndex === index){
        return {...cardItem , added: !cardItem.added }
       }
       return cardItem
      })
   })
  }
  return (
    <div className='w-full h-screen bg-zinc-100'>
      <Navbar data={songData} />
      <div className='px-20   flex-wrap flex'>

      {songData.map((item,index)=>(
         <Card key={index} values={item} index={index} handleClick = {handleClick} />
      ))}


      </div>
    </div>
  )
}

export default App
