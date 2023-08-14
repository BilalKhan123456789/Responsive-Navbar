import React from 'react'

import Image from 'next/image'
import main from '../../../Images/main.jpg'


function HeroSec() {
  return (
    <>
      
      <div>
<Image
src={main}
alt="."
className='relative   '
/>

<div className=' justify-center hidden md:flex '>
<button className='absolute top-72  w-44 h-12 border-2  border-black hover:bg-red-600 hover:border-none hover:text-white'>Learn More</button>

</div>

<article class="prose lg:prose-xl">
</article>




      </div>




    </>
  )
}

export default HeroSec
