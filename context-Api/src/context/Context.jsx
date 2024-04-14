import { createContext, useState } from 'react'


export const userContext= createContext();
const Context = (props) => {

    const [user,setUser] = useState([
        {id:0 , username:"nandan" , country:"INDIA"},
        {id:1 , username:"namdev" , country:"USA"},
        {id:2 , username:"namrata" , country:"Australia"}
    ])
  
    console.log(props);
    return (
        <userContext.Provider value={{user,setUser}}>
            {props.children}
        </userContext.Provider>
    )
  
}

export default Context