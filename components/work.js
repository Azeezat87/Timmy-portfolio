import React from 'react'
import Image from 'next/image'

export default function Work() {
  return (
    <section className='w-screen px-20 font-semibold'>
      <div>
        <h1 className='text-[52px] [text-#16063E] mb-8'>Selected Works</h1>
      </div>
      <div>
        <div className='bg-[#7444EE] w-[586px] h-[519px] relative rounded-[20px] pt-20 mb-10'>
          <div className='bg-[url("/images/label1.png")] bg-no-repeat w-[272px] h-[77px] z-10 absolute -top-10 left-40'>
            <h3 className='text-[32px] text-[#16063E] text-center mt-2'>
              Jeetar
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='mb-[42px]'>
              <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>
                A super app that helps you get your groceries delivered in less
                than 10 minutes
              </p>
            </div>
            <div className='flex gap-5'>
              <Image src='/images/phone1.png' width={250} height={250} alt='' />
              <Image src='/images/phone2.png' width={250} height={250} alt='' />
            </div>
          </div>
        </div>
        <div className=''></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
