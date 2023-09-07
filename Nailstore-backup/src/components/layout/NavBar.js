import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const links=[{to:"/about-me",text:"about me"},{to:"/services",text:"Services"},{to:"/signup",text:"Sign Up"}]
  return (
    <div className ="grid grid-col-12 border-b-2 border-black">
      <p className= "text-5xl font-extrabold text-slate-600"> D'Luxe Beauty Parlor LLC.</p>
    <div className =" flex justify-end">

     { links.map(i=>{
     return <Link to ={i.to} >{i.text}</Link>
     })}
    </div>
    </div>
  );
}
export default NavBar;
