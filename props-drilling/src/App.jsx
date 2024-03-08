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


import React, { useState } from 'react'
import Card from './components/Card'


function App() {
  const data = [
    {name:"Johnnie" , profession:"Developer" , image:"https://www.shutterstock.com/image-photo/express-positive-human-emotions-mature-600nw-1883255677.jpg",friends:false},
    {name:"Anjali", profession:"Fashion Designer" , image:"https://media.istockphoto.com/id/1427986836/photo/mid-adult-woman-in-rural-landscape-close-up.jpg?s=612x612&w=0&k=20&c=d9j3rM34c8K8frH7NG79hs_7UB5ZQb7bmwz34xN8WTU=",friends:false},
    {name:"Virat Kohli" , profession:"Cricketer" , image:"https://resize.indiatvnews.com/en/resize/newbucket/400_-/2023/01/world-cup-1675151271.jpg",friends:false}
  ]
  const [realData,setRealData] = useState(data)

  const handleFriendsButton = (cardIndex)=>{
        setRealData((previous)=>{
       return   previous.map((item,index)=>{
            if(index === cardIndex){
                 return {...item,friends: !item.friends}
              }
              return item
          })
        })
  }
  



  return (
    <div className='w-full h-screen bg-zinc-300 items-center justify-center flex gap-10'>
      {realData.map((item,index)=>(
        <Card key={index} index={index} handleFriendsButton={handleFriendsButton} values={item}/>
      ))}
    </div>
  )
}

export default App

//<Card image={item.image}  name={item.name} profession={item.profession}/> ye baar baar likne se accha isse hum ek variable me dal denge