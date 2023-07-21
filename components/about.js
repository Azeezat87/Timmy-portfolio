import React from 'react'
import Image from 'next/image'
import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import MyDocument from '../MyDocument'
import {Button} from '../components/Button'

export default function About() {
  return (
    <section id='about' className='mt-32 font-semibold'>
      <div className='container md:px-5'>
        <div>
          <h2 className='text-[52px] [text-#16063E] mb-[49px]'>About me</h2>
        </div>
        <div className='flex max-w-full h-[429px] shrink-0 gap-[57px]'>
          <div className='max-w-[533px]'>
            <Image src='/images/profile.png' width={533} height={533} alt='' />
          </div>
          <div className='flex flex-col gap-5'>
            <div className='mt-5 max-w-[590px] text-lg leading-[27px] text-[#5A5566] font-medium'>
              <p>
                An empathetic, pragmatic, and versatile product designer with
                over 6 years of experience in understanding user needs and wants
                and being able to translate these insights into conceptual and
                visual design while aligning with the business goals. Supervised
                a 4-person product design team directly and collaborated with
                more than 30 people on a cross-functional team.
              </p>
              <br/>
              <p>
                Seeking an opportunity where I can put my knowledge of product
                design to use, and my main goal is to provide high-caliber work
                that will benefit any organisation.
              </p>
            </div>
            <div className=''>
              <a href='/files/timmy-cv.pdf' download>
              <Button
                text='Download CV'
                className='relative text-base border-2 border-[#16063E] px-[33px] py-[14px] font-medium'>
              </Button> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
