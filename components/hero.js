import React from 'react'
import Image from 'next/image'
import {Button} from '../components/Button'

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center text-[#16063E] relative mt-20'>
      <div className='absolute top-[-20px] left-[175px]'>
        <Image src='/images/logo2.png' width={85} height={85} alt='logo' />
      </div>
      <div>
        <h1 className='font-semibold text-[64px]'>
          Oluwatimilehin Akapo is a
        </h1>
      </div>
      <div>
        <h2 className='font-bold text-[90px] -mt-5'>Skilled Product designer</h2>
        <Image
          src='/images/solving.png'
          width={165}
          height={165}
          alt=''
          className='absolute top-20 right-0'
        />
      </div>
      <div className='max-w-3xl text-[26px] font-medium text-center text-[#5A5566] mb-10'>
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
          className='absolute bottom-14 left-7'
        />
      </div>
      <div className='mb-10'>
         <Button text='Contact me' className='relative text-xl border-2 border-[#16063E] px-10 py-4 font-bold'/>
      </div>
      <div className='mb-20'>
        <ul className='flex gap-6 underline text-lg font-medium'>
          <li>Twitter</li>
          <li>Behance</li>
          <li>Linkedin</li>
        </ul>
        <Image
          src='/images/Vector.png'
          width={120}
          height={120}
          alt=''
          className='absolute bottom-8 right-48'
        />
      </div>
    </section>
  );
}
