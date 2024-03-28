import React from "react";
import toppng from '../assets/topnavbar/top.png';
import tablet from '../assets/topnavbar/Tablettop.png';
import phonetop from  '../assets/topnavbar/Phonetop.png';
import udsmlogo from '../assets/topnavbar/udsm.png';
import irdclogo from '../assets/topnavbar/IRDC.png';

import './NavbarHeader.css'

export default function NavbarHeader() {

 return (
    <>
     <div className="logos container d-flex justify-content-center w-100">
 <picture>
   <source media="(min-width: 884px)" srcset={toppng} />
   <source media="(min-width: 565px)" srcset={tablet} />
   <img src={phonetop} alt="logo" style={{ width: 'auto' }} />
 </picture>

 <div className="mobile">
   <img src={udsmlogo} alt="udsm" />
   <div className="logo-heading">
     <h2>
       UNIVERSITY OF DAR ES SALAAM <br /> COLLEGE OF SOCIAL SCIENCE{' '}
       <br /> DEPARTMENT OF GEOGRAPHY <br />
       RESEARCH CHAIR ON FORCED DISPLACEMENT
     </h2>
   </div>
   <img src={irdclogo} alt="IRDC" />
 </div>
</div>
    </>
 )


}
