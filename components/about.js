import React from 'react'
import Image from 'next/image'
import {Button} from '../components/Button'

export default function About() {
  return (
    <section className='w-full my-28 px-20 font-semibold'>
      <div>
          <h2 className='text-[52px] [text-#16063E] mb-8'>About me</h2>
      </div>
      <div className='flex gap-12'>
          <div className=''>
             <Image src='/images/profile.png' width={600} height={600} alt='' />
           </div>
           <div className='flex flex-col gap-5 w-[590px]'>
             <div className='mt-8'>
                <p className='text-lg text-[#5A5566] font-medium mb-2'>
              An empathetic, pragmatic, and versatile product designer with over
              6 years of experience in understanding user needs and wants and
              being able to translate these insights into conceptual and visual
              design while aligning with the business goals. Supervised a
              4-person product design team directly and collaborated with more
              than 30 people on a cross-functional team.
              <br />
              <br />
              Seeking an opportunity where I can put my knowledge of product
              design to use, and my main goal is to provide high-caliber work
              that will benefit any organisation.
            </p>
          </div>
          <div className=''>
            <Button text='Download CV' className='relative text-base border-2 border-[#16063E] px-8 py-4 font-medium'/>
          </div>
        </div>
      </div>
    </section>
  );
}
