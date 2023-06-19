import React from 'react'
import Image from 'next/image'


export default function Work() {
  return (
    <section className='px-[120px] font-semibold'>
      <div className='mb-8'>
        <h1 className='text-[52px] [text-#16063E]'>Selected Works</h1>
      </div>
      <div className='w-[1200px] border-2 border-black grid grid-cols-2 gap-x-7 gap-y-14'>
        {/* Jeetar */}
        <div className='bg-[#7444EE] w-[586px] h-[519px] relative rounded-[20px] pt-20 mt-8'>
          <div className='bg-[url("/images/label1.png")] bg-no-repeat w-[272px] h-[77px] absolute -top-10 left-[157px]'>
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

        {/* Wellness */}
        <div
          className='bg-[#FE635C] w-[586px] h-[519px] relative rounded-[20px] pt-20 mt-8'
        >
          <div className='bg-[url("/images/label2.png")] bg-no-repeat w-[272px] h-[77px] absolute -top-10 left-[157px]'>
            <h3 className='text-[32px] text-[#16063E] text-center mt-2'>
              Wellness
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='mb-[42px]'>
              <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>
                A super app that helps you get your groceries delivered in less
                than 10 minutes
              </p>
            </div>
            <div className='flex'>
              <Image src='/images/phone3.png' width={250} height={250} alt='' />
              <Image src='/images/phone4.png' width={250} height={250} alt='' />
            </div>
          </div>
        </div>

        {/* size AR */}
        <div className='bg-[#EDB03B] w-[586px] h-[519px] relative rounded-[20px] pt-20 mt-8'>
          <div className='bg-[url("/images/label3.png")] bg-no-repeat w-[272px] h-[77px] absolute -top-10 left-[157px]'>
            <h3 className='text-[32px] text-[#16063E] text-center mt-2'>
              size AR
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
              <Image src='/images/phone5.png' width={250} height={250} alt='' />
              <Image src='/images/phone6.png' width={250} height={250} alt='' />
            </div>
          </div>
        </div>

        {/* Faramove */}
        <div className='bg-[#3C8369] w-[586px] h-[519px] relative rounded-[20px] pt-20 mt-8'>
          <div className='bg-[url("/images/label4.png")] bg-no-repeat w-[272px] h-[77px] absolute -top-10 left-[157px]'>
            <h3 className='text-[32px] text-[#16063E] text-center mt-2'>
              Faraway
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
              <Image src='/images/phone7.png' width={250} height={250} alt='' />
              <Image src='/images/phone8.png' width={250} height={250} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
