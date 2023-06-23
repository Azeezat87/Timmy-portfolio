import React from 'react'
import Image from 'next/image'
import {Button} from '../components/Button'

export default function Hero() {
  return (
    <section className='pt-[139px] pb-[110px]'>
      <div className='flex flex-col items-center justify-center text-[#16063E] relative'>
        <div className='max-w-[1168px]'>
          <h1 className='font-semibold text-[64px] leading-[70.4px] text-center'>
            Oluwatimilehin Akapo is a
          </h1>
          <h2 className='font-bold text-[90px] leading-[99px] text-center'>
            Skilled Product designer
          </h2>
        </div>
        <div className='max-w-[770px] mt-3'>
          <p className='text-[26px] font-medium text-center text-[#5A5566] leading-[36px]'>
            As a designer I believe “Design” is a powerful tool that can make
            the world a better place.
          </p>
        </div>
        <div className='mt-10'>
          <Button
            text='Contact me'
            className='relative text-xl border-2 border-[#16063E] px-[43px] py-[18px] font-bold'
          />
        </div>
        <div className='mt-14'>
          <ul className='flex gap-6 underline text-lg font-medium'>
            <li>Twitter</li>
            <li>Behance</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className='absolute -top-9 left-[177px]'>
          <Image src='/images/face.svg' width={91} height={91} alt='face' />
        </div>
        <div>
          <Image
            src='/images/solving.svg'
            width={159}
            height={159}
            alt=''
            className='absolute top-14 right-[14px]'
          />
        </div>
        <div>
          <Image
            src='/images/shape.svg'
            width={47}
            height={47}
            alt=''
            className='absolute bottom-20 left-8 '
          />
        </div>
        <div>
          <Image
            src='/images/vector.svg'
            width={133}
            height={133}
            alt=''
            className='absolute top-96 right-48'
          />
        </div>
      </div>
    </section>
  );
}
