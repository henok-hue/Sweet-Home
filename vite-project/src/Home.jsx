import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Red from '../src/assets/icons8-gold-medal-50.png'
import Gra from '../src/assets/icons8-linkedin-50.png'
import Ga from '../src/assets/icons8-instagram-50.png'


import Awa from '../src/assets/icons8-trophy-32.png'

import Yas from '../src/assets/icons8-checkmark-48.png'
import ra from '../src/assets/icons8-facebook-logo-50.png'

import Loc from '../src/assets/location.png'
import BB from '../src/assets/bba.jpg'


import Joan from '../src/assets/OI.jpg'
import On from '../src/assets/OIP.jpg'
import LADY from '../src/assets/download (1).jpg'
function Home () {
    const [sticky , setSticky] = useState(false);
    useEffect(() => {
     window.addEventListener('scroll', ()=>{window.scrollY > 50 ? setSticky(true) : setSticky(false);
  
     })
  
    },[])
  
      return (
          <>
  <body>
  <div className= {`nav ${sticky? 'navdark' : ''}`}>
     <h7 className='tag'>Sweet <p className='swe'>Home</p></h7>
     
     <Link to='/home' className="h">Home</Link>
  <Link to='/Ser' className='ab'>Services</Link>
   <Link to='/Abt'className="b">About</Link></div>
   
   <div className='move'>
 <div className='bod'><div className="hott"> <h1 className='log'>Find Your Perfect Home<h4 className='lo'>Let Us Show You How Personlisied A Home Can Be.</h4></h1>
<div className="pr"> 
   <div className="inpu"><span>City</span><br /><input placeholder="Location"></input></div>
   <div  className="inp"><span>House</span><br /><input placeholder="Range"></input></div>
   <div className="inpet" ><span>Style</span><br /><input placeholder="Prefernc"></input></div>
 <button className="rc"> Search</button>
   
</div> </div> </div>
<header className='re'>Realestate Listed</header>
<h6><h8 className='ahh'>A List Properties Avaliable For Purchase Or Renting</h8> <br />Currently Listed Housings Which Are Occupied Will Be Avalible Soon</h6>
<br /><div className="cov">
<div className="stef"><img className="fur" src={LADY}/> <p className="lady">For Sale</p>
<br /> <p > For Sale</p> <h3> <img className="loc" src= {Loc}/> 50345 Street</h3><br />
<button className="css"> $1,089</button> 
</div>
<div className="ste"><img className="ill" src={On}/><p className="lady">Rented</p>
<br /> <p > Rented</p> <h3> <img className="loc" src= {Loc}/> 50345 Street</h3><br />
<button className="co"> $3,079</button>  </div>
<div className="sef"><img className="gaga" src={Joan}/> <p className="lady">Sold</p>
<br /> <p className="ation" > Sold</p><h3> <img className="loc" src= {Loc}/> 50345 Street</h3><br />
<button className="os"> $2,089</button>  </div>
</div>
<div className="bla"><h10 className='we'>Our Awards
</h10> 
<br />

<h9 className="i">Most Coveted Achivments</h9><br /><div className="awa">

<br /><h1>5 Grammys</h1><img className="mmy" src= {Awa}  />
<br /><h1>5 Grammys</h1> <img className="mmy" src= {Red} />
<br /><h1>5 Grammys</h1><img className="mmy" src= {Awa} /></div>
</div>
<h25 className='sdf'>Explore By Location</h25>

<div className="vac">
<div className="par">
<div className="sp">
  <p className="head">Bevarly Hills, Calfornia</p>
<div className="fra"><ul><h1>10 Villas </h1></ul>
<ul><h1>14 Offices</h1></ul>
<ul><h1>18 Apartments </h1></ul></div></div></div>

<div className="pa">
<div className="sp">
  <p className="hea">Jeresy, New York</p>
  <div className="fra"><ul><h1>11 Villas </h1></ul>
<ul><h1>9 Offices</h1></ul>
<ul><h1>13 Apartments </h1></ul></div></div>  </div>      
<div className="rae">
<div className="sp">
  <h9 className="hea">Hilton Street, Boston</h9>
  <div className="fr">
    <ul><h1>19 Villas </h1></ul>
<ul><h1>10 Offices</h1></ul>
<ul><h1>13 Apartments </h1></ul>
</div></div></div></div>

<div className="act">
<div className="acc">

<img className="ou" src={BB} />
<button className="n">3 Listings</button> 
<div className="pla"><h3 className='yass'> <img className="loc" src= {Loc}/> 50345 Street<br /></h3><div className="ce">Justin Clark<h1></h1></div></div>
<div className="so">
<button className="me"><img className="ie"  src= {Gra} /></button>
<button className="me"><img className="ie"  src= {Ga} /></button>
<button className="me"><img  className="ie" src= {ra} /></button>

</div>
</div>
<div className="acc">

<img className="ou" src={BB} />
<button className="n">8 Listings</button> 
<div className="pla"><h3 className='yass'> <img className="loc" src= {Loc}/> 50345 Street<br /></h3><div className="ce">Charles Brown<h1></h1></div></div>
<div className="so">
<button className="me"><img className="ie"  src= {Gra} /></button>
<button className="me"><img className="ie"  src= {Ga} /></button>
<button className="me"><img  className="ie" src= {ra} /></button>

</div>
</div>
<div className="acc">

<img className="ou" src={BB} />
<button className="n">1 Listing</button> 
<div className="pla"><h3 className='yass' > <img className="loc" src= {Loc}/> 50345 Street<br /></h3><div className="ce">Karsten Chatmen<h1></h1></div></div>
<div className="so">
<button className="me"><img className="ie"  src= {Gra} /></button>
<button className="me"><img className="ie"  src= {Ga} /></button>
<button className="me"><img  className="ie" src= {ra} /></button>

</div>
</div>
</div>

<div className="bb">
<div className="wal">
<div className="hott"><h24 className='ty'> 29$<h4>Basics</h4></h24></div> 

<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">99% Uptime Garentee</h10></div></ul> 
<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">5GB Storage</h10></div></ul> 
<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">Enterprise</h10></div></ul> 
</div>
<div className="wals">
<div className="hott"><h24 className='ty'> 49$<h4>Strandard</h4></h24> </div>

<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">99% Uptime Garentee</h10></div></ul> 
<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">10GB Storage</h10></div></ul> 
<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">Enterprise</h10></div></ul> 
</div>
<div className="wal">
<div className="hott"><h24 className='ty'> 69$<h4>Premium</h4></h24></div> 

<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">Personal Help</h10></div></ul> 
<ul className="crb"><img src={Yas}  className='hg'/><div ><h10 className="sb">Enterprise</h10></div></ul> 
<ul className="crb"><img src={Yas} className='hg'/><div ><h10 className="sb">20GB Storage</h10></div></ul>  
</div>
</div>





</div>


   
   
   </body>
   </>
   )}
   export default Home