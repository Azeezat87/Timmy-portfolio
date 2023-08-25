import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { config } from '../utils/config'
import { Button } from '../components/Button'

const SocialAccounts = ({ href, text }) => (
    <Link href={href}
          target='_blank'
          rel='noopener noreferrer'>
       <li>{text}</li>
    </Link>
)

const SocialMedia = [
  { href: config.twitter_url, text: 'Twitter' },
  { href: config.behance_url, text: 'Behance' },
  { href: config.linkedin_url, text: 'Linkedin' },
]

export default function Hero() {
  return (
    <section id='home' className='pt-[139px] pb-[110px]'>
      <div className='flex flex-col items-center justify-center text-[#16063E] relative '>
        <div className=''>
          <h2 className='max-w-[800px] font-semibold text-[64px] leading-[70.4px] text-center justify-center mbl:text-start mbl:text-[42px] mbl:leading-[48px] mbl:tracking-[-0.4px] '>
            Oluwatimilehin Akapo
            <bdi className='mbl:font-bold'> is a </bdi>
            <span className='max-w-[1168px] font-bold text-[90px] leading-[99px] text-center mbl:text-[42px] mbl:leading-[48px] mbl:tracking-[-0.4px]'>
              skilled Product designer
            </span>
          </h2>
        </div>
        <div className='max-w-[770px] mt-3'>
          <p className='text-[26px] font-medium text-center text-[#5A5566] leading-[36px] mbl:text-start mbl:text-[16px] mbl:leading-[24px] mbl:tracking-[-0.4px]'>
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
            {SocialMedia.map((item, index) => (
              <SocialAccounts key={index} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
        <div className='absolute -top-9 left-[177px] mbl:hidden'>
          <Image src='/images/face.svg' width={91} height={91} alt='face' />
        </div>
        <div className='hidden absolute -top-9 left-[177px] mbl:block'>
          <Image src='/images/face2.svg' width={91} height={91} alt='face' />
        </div>
        <div>
          <Image
            src='/images/solving.svg'
            width={159}
            height={159}
            alt=''
            className='absolute top-14 right-[14px] mbl:hidden'
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
