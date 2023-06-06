import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center text-[#16063E] relative mt-20'>
      <div className='absolute -top-3 left-56'>
        <Image src='/images/logo2.png' width={50} height={50} alt='logo' />
      </div>
      <div>
        <h1 className='font-bold text-4xl'>Oluwatimilehin Akapo is a</h1>
      </div>
      <div>
        <h2 className='font-bold text-6xl'>Skilled Product designer</h2>
      </div>
      <div>
        <p>
          As a designer I believe “Design” is a powerful tool that can make the
          word a better place.
        </p>
      </div>
      <div>
        <button className='border border-black '>
          Contact me
        </button>
      </div>

    </section>
  );
}
