import React from 'react'
import Image from 'next/image'

const ListItems = ({ src, width, height, className }) => (
 <div className=''>
  <Image src={src} width={width} height={height} className={className} alt='' />
  </div>
)

const images = [
 { src: '/images/group12.png', width: '360', height: '360', className: 'absolute top-36 left-10' },
 { src: '/images/group2.png', width: '200', height: '200', className: 'absolute bottom-52 right-[400px]' },
 {src: '/images/group3.png', width: '280', height: '200', className: 'absolute top-44 right-[420px]'},
 {src: '/images/group4.png', width: '60', height: '60', className: ''},
 {src: '/images/group5.png', width: '60', height: '60', className: ''},
 { src: '/images/group5.png', width: '60', height: '60', className: '' },
 { src: '/images/group6.png', width: '60', height: '60', className: '' },
 { src: '/images/group7.png', width: '92', height: '92', className: 'absolute top-40 right-96' },
 { src: '/images/group8.png', width: '60', height: '60', className: '' },
 { src: '/images/group9.png', width: '60', height: '60', className: '' },
 {src: '/images/group11.png', width: '60', height: '60', className: ''}
]

export default function Skill() {
  return (
    <section className='w-screen my-28 px-20 '>
    <div className='bg-[url("/images/group.png")] bg-no-repeat w-[1200px] h-[409px] relative'>
     {images.map((image, index) => (
        <ListItems
           key={index}
           src={image.src}
           width={image.width}
           height={image.height}
           className={image.className}
        />
        ))}
      </div>
    </section>
  );
}
