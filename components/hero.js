import React from 'react'
import Image from 'next/image'

export default function Hero() {
  const Button = ({text, onClick}) => (
    <button className='border-2 border-[#16063E] px-10 py-3 text-xl font-bold'>
      {text}
       <span className='absolute -top-1 -right-1 border-2 border-[#16063E] p-[3px] bg-white'></span>
       <span className='absolute -top-1 -left-1 border-2 border-[#16063E] p-[3px] bg-white'></span>
       <span className='absolute -bottom-1 -right-1 border-2 border-[#16063E] p-[3px] bg-white'></span>
       <span className='absolute -bottom-1 -left-1 border-2 border-[#16063E] p-[3px] bg-white'></span>
    </button>
  )
  return (
    <section className='flex flex-col items-center justify-center text-[#16063E] relative mt-20'>
      <div className='absolute top-[-20px] left-[167px]'>
        <Image src='/images/logo2.png' width={85} height={85} alt='logo' />
      </div>
      <div>
        <h1 className='font-semibold text-[64px] mb-[-14px]'>
          Oluwatimilehin Akapo is a
        </h1>
      </div>
      <div>
        <h2 className='font-bold text-[90px] mb-2'>Skilled Product designer</h2>
        <Image
          src='/images/solving.png'
          width={170}
          height={170}
          alt=''
          className='absolute bottom-32 -right-3'
        />
      </div>
      <div className='max-w-3xl text-[26px] font-normal text-center text-[#5A5566]'>
        <p>
          As a designer I believe “Design” is a powerful tool that can make the
          world a better place.
        </p>
      </div>
      <div>
        <Image
          src='/images/Shape.png'
          width={47}
          height={47}
          alt=''
          className='absolute bottom-1 left-5'
        />
      </div>
      <div className='relative'>
         <Button text='Contact me'/>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Image
          src='/images/Vector.png'
          width={100}
          height={100}
          alt=''
          className='absolute -bottom-32 right-52'
        />
      </div>
    </section>
  );
}
