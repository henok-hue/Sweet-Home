import React from "react";
import { useState , useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Red from '../src/assets/icons8-gold-medal-50.png'
import Awa from '../src/assets/icons8-trophy-32.png'

import se from '../src/assets/icons8-apartment-64.png'
import om from '../src/assets/icons8-house-48.png'
import cl from '../src/assets/icons8-home-automation-80.png'
import Yas from '../src/assets/icons8-checkmark-48.png'
import ra from '../src/assets/icons8-facebook-logo-50.png'
import Gra from '../src/assets/icons8-linkedin-50.png'
import Ga from '../src/assets/icons8-instagram-50.png'
import Loc from '../src/assets/location.png'
import BB from '../src/assets/bba.jpg'


import Joan from '../src/assets/OI.jpg'
import On from '../src/assets/OIP.jpg'
import LADY from '../src/assets/download (1).jpg'
import './Serv.css'

function Ser() {
     const [sticky , setSticky] = useState(false);
      useEffect(() => {
       window.addEventListener('scroll', ()=>{window.scrollY > 50 ? setSticky(true) : setSticky(false);
    
       })
    
      },[])
return (
<>
<body>
<div className='nav'>
   <h7 className='tag'>Sweet <p className='swe'>Home</p></h7>
   <Link to='/home' className="hm">Home</Link>
   <Link to='/Ser' className='abc'>Services</Link>
    <Link to='/Abt'className="b">About</Link>
  
 </div> 
 <div className="move">
<div className="bge">
   <h19 className='omg'>Services</h19> <br />
   <h19 className='mg'>Services- All Services</h19> 
</div>
 <div className="ct">

 <div className="cc">
 
 
 <button className="med"><img  className="i" src= {se} /></button>
 <h22 className='fam'>Famliy Home</h22>
 </div>

 <div className="cc">
 
 
 <button className="ed"><img  className="ia" src= {om} /></button>
 <h22 className='fm'>Apartment</h22>
 </div>

 <div className="cc">
 

 <button className="md"><img  className="ia" src= {cl} /></button>
 <h22 className='am'>Office</h22>
 </div>
</div></div>
 </body>
</>
)}
export default Ser