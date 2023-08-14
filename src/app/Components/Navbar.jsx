"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../Images/huawei_logo.jpg';
// import 'animate.compat.css';



function Navbar() {

const [show, setshow] = useState(false)

const [hide,sethide]=useState(false)


const handleshow =()=>{

  if(show ==false || hide ==false){


    setshow(true)
    sethide(true)

  }else{

    sethide(false)
  setshow(false)
  }

}

// const handl=()=>{

//   sethide(false)
//   setshow(false)

// }










  return (
<>


{/* First Layout */}

<div className='hidden md:block '>

<div className="bg-black flex-wrap  hidden md:flex text-white justify-end px-10">

<ul className='flex space-x-12 text-sm font-light'>
  <li>Corporate</li>
  <li>Worldwide</li>
  <li>Login</li>
</ul>

</div>



<div className=" p-4  flex justify-around items-center ">

<Image
src={logo}
alt='logo'
className='w-36 '
/>

<ul className='flex text-sm  space-x-7    '>
  <li>Customer Products</li>
  <li>Business Products</li>
  <li>Support</li>
  <li>Partners & Developers</li>
  <li>About Hauwei</li>
</ul>


<div className='flex space-x-7'>
<svg fill="none" height="20" viewBox="0 0 15 15" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m2.40114 6.38957-.49694-.05522zm-.77778 7.00003.49694.0552zm11.75324 0-.4969.0552zm-.7778-7.00003.497-.05522zm-10.6946-.05522-.77778 7.00005.99388.1104.77778-7.00002zm.71304 8.66565h9.76546v-1h-9.76546zm11.25626-1.6656-.7777-7.00005-.9939.11043.7778 7.00002zm-2.2686-8.3344h-8.20988v1h8.20988zm1.4909 1.33435c-.0844-.75965-.7265-1.33435-1.4909-1.33435v1c.2548 0 .4688.19157.497.44478zm-.7131 8.66565c.894 0 1.5896-.7771 1.4908-1.6656l-.9938.1104c.0329.2962-.199.5552-.497.5552zm-11.25628-1.6656c-.09873.8885.59681 1.6656 1.49082 1.6656v-1c-.298 0-.52985-.259-.49694-.5552zm1.77166-6.88962c.02814-.25321.24217-.44478.49694-.44478v-1c-.76432 0-1.40642.5747-1.49082 1.33435zm2.1019-2.44478v-.5h-1v.5zm5-.5v.5h1.00002v-.5zm-2.5-2.5c1.38071 0 2.5 1.11929 2.5 2.5h1.00002c0-1.933-1.56702-3.5-3.50002-3.5zm-2.5 2.5c0-1.38071 1.11929-2.5 2.5-2.5v-1c-1.933 0-3.5 1.567-3.5 3.5z" fill="#000"/></svg>
<svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" stroke-width="1.1"><circle cx="9" cy="9" r="7"/><path d="m14 14 4 4z"/></g></svg>

</div>

</div>


</div>


{/* Second Layout show Mobile and Tab screen */}



<div className="bg-gray-50 p-4 flex md:hidden justify-between items-center ">

<Image
src={logo}
alt='logo'
className='w-36'
/>



<div className='flex items-center space-x-10'>
<svg height="25" viewBox="0 0 20 20" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" stroke-width="1.1"><circle cx="9" cy="9" r="7"/><path d="m14 14 4 4z"/></g></svg>



<div  onClick={()=>handleshow()} >




{
  hide == true?
<>
<svg enable-background="new 0 0 92 92" height="30" viewBox="0 0 92 92" onClick={()=>handleshow()} width="30" xmlns="http://www.w3.org/2000/svg"><path d="m70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3l-18.3-18.3-18.3 18.3c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4l18.3-18.3-18.3-18.3c-1.8-1.8-1.8-4.6 0-6.4s4.6-1.8 6.4 0l18.3 18.3 18.3-18.3c1.8-1.8 4.6-1.8 6.4 0s1.8 4.6 0 6.4l-18.3 18.3z"/></svg>

 


</>

  :
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="#0D0D0D"/></svg>

}









</div>
</div>
</div>












{
  show  ==  true?
  
  <div className='flex bg-gray-50 justify-center md:hidden animate__slideInDown '>
  

<ul className='text-sm    text-center space-y-3  '>
  <li>Customer Products</li>
  <li>Business Products</li>
  <li>Support</li>
  <li>Partners & Developers</li>
  <li>About Hauwei</li>
</ul>


  </div>
  :
  null
}






















    </>
  )
}

export default Navbar
