/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

// const ListItems = ({ src, width, height, className }) => (
//  <div className=''>
//   <Image src={src} width={width} height={height} className={className} alt='' />
//   </div>
// )

// const images = [
//   {
//     src: '/images/Star1.png',
//     width: '70',
//     height: '70',
//     className: 'absolute top-[80px] left-[130px]',
//   },
//   {
//     src: '/images/Star2.png',
//     width: '172',
//     height: '172',
//     className: 'absolute top-[140px] left-0',
//   },
//   {
//     src: '/images/group12.png',
//     width: '361',
//     height: '361',
//     className: 'absolute top-[145px] left-12',
//   },
//   {
//     src: '/images/group2.png',
//     width: '220',
//     height: '220',
//     className: 'absolute bottom-[200px] right-[390px]',
//   },
//   {
//     src: '/images/group3.png',
//     width: '330',
//     height: '330',
//     className: 'absolute top-[169px] right-[394px]',
//   },
//   {
//     src: '/images/group4.png',
//     width: '68',
//     height: '68',
//     className: 'absolute top-[225px] right-[512px]',
//   },
//   {
//     src: '/images/group5.png',
//     width: '35',
//     height: '35',
//     className: 'absolute top-[205px] right-[465px]',
//   },
//   {
//     src: '/images/group5.png',
//     width: '16',
//     height: '16',
//     className: 'absolute top-[280px] right-[490px]',
//   },
//   {
//     src: '/images/group6.png',
//     width: '168',
//     height: '168',
//     className: 'absolute top-44 right-[265px]',
//   },
//   {
//     src: '/images/group7.png',
//     width: '100',
//     height: '100',
//     className: 'absolute top-5 right-[330px]',
//   },
//   {
//     src: '/images/group8.png',
//     width: '220',
//     height: '220',
//     className: 'absolute top-[190px] right-[27px]',
//   },
//   {
//     src: '/images/group9.png',
//     width: '208',
//     height: '208',
//     className: 'absolute top-2 right-[150px]',
//   },
//   {
//     src: '/images/group10.png',
//     width: '120',
//     height: '120',
//     className: 'absolute top-[120px] right-[22px]',
//   },
//   {
//     src: '/images/group11.png',
//     width: '57',
//     height: '57',
//     className: 'absolute top-16 right-[60px]',
//   },
// ];

export default function Skill() {
  return (
    <>
      <section className='my-28'>
        <div className='container h-[409px]'>
          <img src='/images/frame3.svg' alt='' />
        </div>
        {/* <div className='container bg-[url("/images/group.png")] bg-no-repeat bg-contain h-[409px] relative'>
          {images.map((image, index) => (
            <ListItems
              key={index}
              src={image.src}
              width={image.width}
              height={image.height}
              className={image.className}
            />
          ))}
        </div> */}
      </section>
      <section className='mb-28'>
        <Image src='/images/frame2.png' width={1440} height={1440} alt='' />
      </section>
    </>
  );
}
