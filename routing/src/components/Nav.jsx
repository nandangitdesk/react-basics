// import {Link} from "react-router-dom"

// function Nav() {
//   return (
//     <nav className='flex items-center justify-center gap-10 font-semibold text-sm mt-10'>
//         <Link to="/">House</Link>
//         <Link to="/About">About</Link>
//         <Link to="/User">User</Link>
//     </nav>
//   )
// }

// export default Nav

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex items-center justify-center gap-10 font-semibold text-sm mt-10">
      <NavLink
        style={(e) => {
         return {
          color: e.isActive ? "gray" : ""
        }
        }}
        to="/"
      >
        House
      </NavLink>


      <NavLink className={(e)=>{
        return[
          e.isActive ? "text-zinc-500" : ""
        ]
      }} to="/About">About</NavLink>


      <NavLink className={(e)=>{
        return[
          e.isActive ? "text-zinc-500" : ""
        ]
      }} to="/User">User</NavLink>
    </nav>
  );
}

export default Nav;
  

//nav to bana liye lekin open kaha karenge?
// ---> isliye hamne routing ki hai routing compo me