import React from "react";
import './index.css'
import './about.css'
import Joan from '../src/assets/OI.jpg'
import './serv.css'
import { Link } from "react-router-dom";
function Abt() {
    return (
        <>
     
<div className='nav'>
   <h7 className='tag'>Sweet  <p className='swe'>Home</p></h7>
   
   <Link to='/home' className="hm">Home</Link>
  <Link to='/Ser' className='ab'>Services</Link>
   <Link to='/Abt'className="bc">About</Link>
 </div>
 <div className="move">
<div className="bg">
   <h19 className='omg'>About Us</h19> <br />
   <h19 className='mg'>Everything About Us</h19> 
</div>
 <div className="disc">
    <div>
    <h20 className='dk'>Our Agency</h20><br /><div className="lol">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam expedita, quidem corrupti sunt sit quas, 
        quo exercitationem incidunt delectus sed officia et quia quis libero maxime iusto dolor deleniti quaerat.<br /></p><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam expedita, quidem corrupti sunt sit quas, 
        quo exercitationem incidunt delectus sed officia et quia quis libero maxime iusto dolor deleniti quaerat.<br /></p><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam expedita, quidem corrupti sunt sit quas, 
        quo exercitationem incidunt delectus sed officia et quia quis libero maxime iusto dolor deleniti quaerat.</p></div>
</div>
<div><img  className="od"src={Joan} /></div>
 </div>
 
 </div>
        
        </>
    )
}
export default Abt