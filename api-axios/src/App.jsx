import { Link } from "react-router-dom";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Services from "./components/Services";
import Show from "./components/Show";

function App() {
  
  //add new product in our products api



  return (
    <div className="p-5">
      
      <nav className=" px-4 py-2 flex gap-10 bg-black text-white rounded-full w-fit items-center justify-center m-auto">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/show" element={<Show/>}/>
     </Routes>

     
    </div>
  );
}

export default App;

/* <button
onClick={addProducts}
className="px-5 py-2 bg-slate-500 text-white rounded-md text-xs"
>
Add New Products In Api
</button> */


// const addProducts = () => {
//   const Api = "https://fakestoreapi.com/products";

//   axios
//     .post(Api, {
//       title: "test product",
//       price: 13.5,
//       description: "lorem ipsum set",
//       image: "https://i.pravatar.cc",
//       category: "electronic",
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };