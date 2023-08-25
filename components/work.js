/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MyWork = ({ background, img, item, text, margin }) => (
  <div className='relative mt-8'>
    <div className='w-[272px] h-[77px] absolute -top-10 left-[157px] z-10'>
      <img src={`/images/${img}`} alt='' />
    </div>
  <div
    className={`${background} group overflow-hidden w-[586px] h-[519px] relative rounded-[20px] pt-16 `}
  >
    <div className='flex flex-col items-center '>
      <div className=''>
        <p className='text-xl text-[#E3DAFC] w-[474px] text-center'>{text}</p>
      </div>
      <div className={`${margin}`}>
        <img src={`/images/${item}`} alt='' />
      </div>
    </div>
       <div className='absolute flex items-center justify-between w-[533px] h-[70px] bg-[#16063E80] duration-500 transition-[bottom] -bottom-20 group-hover:bottom-7 left-[26px] rounded-[50px] backdrop-blur-[5px] pl-[28.5px] pr-[32px] text-white text-xl font-medium'>
      <p>Read Case Study</p>
      <img src='/images/case-study.png' width='42px' height='32px' alt='' />
      </div>
  </div>
  </div>
);

const apps = [
  { 
    background: 'bg-[#7444EE]', img: 'label1.svg', item: 'phone.png', text: 'A super app that helps you get your groceries delivered in less than 10 minutes', margin: 'mt-[56.89px]'
  },
  { 
    background: 'bg-[#FE635C]', img: 'label2.svg', item: 'phone2.png', text: 'A super app that helps you get your groceries delivered in less than 10 minutes', margin: 'mt-[30.99px]' 
  },
  { 
    background: 'bg-[#EDB03B]', img: 'label3.svg', item: 'phone3.png', text: 'A super app that helps you get your groceries delivered in less than 10 minutes', margin: 'mt-[15.38px]' 
  },
  { 
    background: 'bg-[#3C8369]', img: 'label4.svg', item: 'phone4.png', text: 'A super app that helps you get your groceries delivered in less than 10 minutes', margin: 'mt-[15.42px]' 
  }
];
  

export default function Work() {

  
  return (
    <section id='works' className='font-semibold mt-32'>
      <div className='container mbl:px-5'>
        <div className='mb-9'>
          <h1 className='text-[52px] [text-#16063E]'>Selected Works</h1>
        </div>
        <div className='w-[1200px] grid grid-cols-2 gap-x-7 gap-y-14'>
          {apps.map((app, index) => (
            <>
              <MyWork
                key={index}
                background={app.background}
                img={app.img}
                item={app.item}
                text={app.text}
                margin={app.margin}
              />
              
            </>
          ))}
        </div>
      </div>
    </section>
  );
}



