/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { config } from '../utils/config'

const SocialImages = ({ href, src }) => (
  <Link href={href} target='_blank' rel='noopener noreferrer'>
    <img src={src} width='36px' height='36px' alt='' /> 
  </Link> 
);

const images = [
  { href: config.twitter_url, src: '/images/twitter.svg' },
  { href: config.linkedin_url, src: '/images/linkedin.svg' },
  { href: config.linkedin_url, src: '/images/linkedin.svg' },
];

export default function Footer() {
  return (
    <section className='mt-24 bg-[#F8F6FE] pt-7'>
      <div className='container flex justify-between pb-[67px] mbl:px-5'>
        <div>
          <footer className='flex gap-2 text-lg font-medium'>
            <p>©️</p>
            <p>TIMMY AKAPO 2021</p>
          </footer>
        </div>
        <div className=''>
          <ul className='flex gap-6 text-lg font-medium text-[#16063E]'>
            <li>
              <Link href='#home'>Home</Link>
            </li>
            <li>
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#works'>Works</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-5'>
          {images.map((item, index) => (
           <SocialImages 
            key={index}
            href={item.href}
            src={item.src}
          />
        ))}
        </div>
      </div>
    </section>
  );
}
