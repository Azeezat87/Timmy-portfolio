import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section className='py-5 flex justify-between'>
      <div>
        <Image 
          src='/images/logo.png' 
          width={46} 
          height={46} 
          alt='logo' />
      </div>
      <div>
        <ul className='flex gap-10 text-base font-medium text-[#16063E]'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/works'>Works</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
