import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section className=' flex justify-between'>
      <div>
        <Image 
          src='/images/logo.png' 
          width={45} 
          height={45} 
          alt='logo' />
      </div>
      <div>
        <ul className='flex gap-10'>
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
