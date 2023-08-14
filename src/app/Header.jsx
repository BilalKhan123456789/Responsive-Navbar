"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import logo from '../../Images/logo.png'




function Header() {

const [show,setshow] = useState(0)






  return (
    <>

<div className='bg-gray-300 hidden  items-center md:flex justify-between '> 

<div>
<Image
src={logo}
alt='.'
className="w-44"
/>

</div>


<div className=''>
<ul className='flex space-x-10'>
    <li>Home</li>
    <li>Career</li>
    <li>Blog</li>
    <li>About</li>
</ul>


</div>

<div className='space-x-8'>
    <button className='bg-black text-white p-2 rounded-md'>Login</button>
    <button className='bg-black text-white p-2 rounded-md' >Sign up</button>
</div>



</div>



<div className='md:hidden flex justify-between bg-gray-300 px-3 '>

<div>

<Image
src={logo}
alt='.'
className="w-32"
/>

</div>



<svg width="30"   height="30" onClick={()=>setshow(1)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="#0D0D0D"/></svg>









</div>

<div className='md:hidden bg-gray-300' > 

    {
        show == 1? 
        <>
        <div className='flex  justify-center items-center'>
<ul className='space-y-3'>
    <li>Home</li>
    <li>Career</li>
    <li>Blog</li>
    <li>About</li>
</ul>




</div>
<div className='space-x-5 flex justify-center mt-3'>
    <button className='bg-black text-white p-2 rounded-md '>Login</button>
    <button className='bg-black text-white p-2 rounded-md' >Sign up</button>
</div>
        </>
        :
        null

    }
</div>

 







    </>
  )
}

export default Header
