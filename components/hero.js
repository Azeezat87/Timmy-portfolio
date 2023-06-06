import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center text-[#16063E] relative mt-20'>
      <div className='absolute -top-3 left-56'>
        <Image src='/images/logo2.png' width={50} height={50} alt='logo' />
      </div>
      <div>
        <h1 className='font-bold text-6xl'>Oluwatimilehin Akapo is a</h1>
      </div>
      <div>
        <h2>Skilled Product designer</h2>
      </div>
      <div>
        <p>
          As a designer I believe “Design” is a powerful tool that can make the
          word a better place.
        </p>
      </div>
    </div>
  );
}
