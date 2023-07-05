/* eslint-disable @next/next/no-img-element */
import React from 'react'

 

export default function Work() {
  return (
    <section className='font-semibold mt-32'>
      <div className='container'>
        <div className='mb-9'>
          <h1 className='text-[52px] [text-#16063E]'>Selected Works</h1>
        </div>
        <div className='w-[1200px] grid grid-cols-2 gap-x-7 gap-y-14'>
          {/* Jeetar */}
          <div className='bg-[#7444EE] w-[586px] h-[519px] relative rounded-[20px] pt-16 mt-8'>
            <div className='w-[272px] h-[77px] absolute -top-10 left-[157px]'>
              <img src='/images/label1.svg' alt='' />
            </div>
            <div className='flex flex-col items-center '>
              <div className=''>
                <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>
                  A super app that helps you get your groceries delivered in
                  less than 10 minutes
                </p>
              </div>
              <div className='mt-[56.89px]'>
                <img src='/images/phone.png' alt='' />
              </div>
            </div>
          </div>

          {/* Wellness */}
          <div className='bg-[#FE635C] w-[586px] h-[519px] relative rounded-[20px] pt-16 mt-8'>
            <div className='w-[272px] h-[77px] absolute -top-10 left-[157px]'>
              <img src='/images/label2.svg' alt='' />
            </div>
            <div className='flex flex-col items-center'>
              <div className=''>
                <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>
                  A super app that helps you get your groceries delivered in
                  less than 10 minutes
                </p>
              </div>
              <div className='mt-[30.99px]'>
                <img src='/images/phone2.png' alt='' className='' />
              </div>
            </div>
          </div>

          {/* size AR */}
          <div className='bg-[#EDB03B] w-[586px] h-[519px] relative rounded-[20px] pt-[57.52px] mt-8'>
            <div className='w-[272px] h-[77px] absolute -top-10 left-[157px]'>
              <img src='/images/label3.svg' alt='' />
            </div>
            <div className='flex flex-col items-center'>
              <div className=''>
                <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>
                  A super app that helps you get your groceries delivered in
                  less than 10 minutes
                </p>
              </div>
              <div className='mt-[23.38px]'>
                <img src='/images/phone3.png' alt='' />
              </div>
            </div>
          </div>

          {/* Faramove */}
          <div className='bg-[#3C8369] w-[586px] h-[519px] relative rounded-[20px] pt-[57.52px] mt-8'>
            <div className='w-[272px] h-[77px] absolute -top-10 left-[157px]'>
              <img src='/images/label4.svg' alt='' />
            </div>
            <div className='flex flex-col items-center'>
              <div className=''>
                <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>
                  A super app that helps you get your groceries delivered in
                  less than 10 minutes
                </p>
              </div>
              <div className='mt-[23.42px]'>
                <img src='/images/phone4.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
