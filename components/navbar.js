import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ListItems = ({href, text}) => (
  <li className='text-base font-medium text-[#16063E] hover:text-[#7444EE] hover:italic hover:underline transition-all'>
    <Link href={href}>{text}</Link>
  </li>
)

const menuItems = [
  {href: '#home', text: 'Home'},
  {href: '#about', text: 'About'},
  {href: '#works', text: 'Works'}, 
]

export default function Navbar() {
  return (
    <section className='py-5 flex justify-between'>
      <div>
        <Image 
          src='/images/logo.svg' 
          width={46} 
          height={46} 
          alt='logo' />
      </div>
      <div>
        <ul className='flex gap-10'>
          {menuItems.map((menuItem, index) => (
            <ListItems 
               key={index}
               href={menuItem.href}
               text={menuItem.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
