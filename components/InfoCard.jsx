import Image from 'next/image'
import React from 'react'

const InfoCard = ({ img, location, title, description, star, price, total }) => {

  return (
    <div>
      <div className='relative h-24 w-40 md:h-52 md:w-80'>
        <Image src={img} layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default InfoCard