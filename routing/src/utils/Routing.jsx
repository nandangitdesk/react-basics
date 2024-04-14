import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import House from '../components/House'
import User from '../components/User'
import UserDetails from '../components/UserDetails'

function Routing() {
  return (
    <Routes>
     <Route path='/' element={<House />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/user' element={<User />}>
     <Route path='/user/:name' element={<UserDetails />}/>

    </Route>
    </Routes>
  )
}

export default Routing


  //  <Route path='/user/:name' element={<User />}/> name ka koi route nahi hai isliye hamne usse banaya or user me name static nahi hai vo hamesha badalta rehta hai isliye use hamne variable banaya by using :


  //route me / hai isliye kuch nahi open hoga 
  //route me /about hai isliye about compo open hoga and so on..