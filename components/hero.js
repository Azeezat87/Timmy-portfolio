import React from 'react'
import Image from 'next/image'
import {Button} from '../components/Button'

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center text-[#16063E] relative mt-[160px]'>
      <div classsName=''>
        <h1 className='font-semibold text-[64px] leading-[70px] text-center'>
          Oluwatimilehin Akapo is a
        </h1>
        <h2 className='font-bold text-[90px] leading-[99px] text-center'>
          Skilled Product designer
        </h2>
      </div>
      <div className='max-w-3xl text-[26px] font-medium text-center text-[#5A5566] mt-3 mb-10'>
        <p>
          As a designer I believe “Design” is a powerful tool that can make the
          world a better place.
        </p>
      </div>
      <div className='mb-14'>
        <Button
          text='Contact me'
          className='relative text-xl border-2 border-[#16063E] px-[43px] py-[18px] font-bold'
        />
      </div>
      <div className='mb-[110px]'>
        <ul className='flex gap-6 underline text-lg font-medium'>
          <li>Twitter</li>
          <li>Behance</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <div className='absolute -top-9 left-[140px]'>
          <Image src='/images/logo2.png' width={91} height={91} alt='logo' />
        </div>
        <div>
          <Image
            src='/images/solving.png'
            width={159}
            height={159}
            alt=''
            className='absolute top-14 -right-6'
          />
        </div>
        <div>
          <Image
            src='/images/Shape.png'
            width={47}
            height={47}
            alt=''
            className='absolute bottom-44 -left-4'
          />
        </div>
        <div>
        <Image
          src='/images/Vector.png'
          width={133}
          height={133}
          alt=''
          className='absolute bottom-20 right-40'
        />
      </div>
    </section>
  );
}
