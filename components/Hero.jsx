import Image from 'next/image'
import React from 'react'
const Hero = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[650px] 2xl:h-[700px]'>
      <Image
      src="https://links.papareact.com/0fm"
      alt="Hero Image"
      layout="fill"
      objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Let your curiosity do the booking</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I&apos;m flexible</button>
      </div>
    </div>
  )
}

export default Hero