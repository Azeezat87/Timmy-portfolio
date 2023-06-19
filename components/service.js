import Image from 'next/image'

export default function Service() {
 

 return (
   <section className='mt-32 px-[120px]'>
     <h1 className='text-[52px] [text-#16063E] mb-14 font-semibold'>
       Services
     </h1>
     <div className='flex gap-7'>
       <div className='relative w-[380px] h-[240px]'>
         <Image src='/images/bg.png' width={380} height={380} alt='' />
         <Image
           src='/images/rect1.png'
           width={40}
           height={40}
           alt=''
           className='absolute top-[1px] left-[315px]'
         />
         <div className='absolute top-7 left-7'>
           <Image
             src='/images/black.png'
             width={64}
             height={64}
             alt=''
             className='mb-6'
           />
           <p className='text-lg font-semibold text-[#16063E] mb-1'>
             UX Research
           </p>
           <p className='text-sm text-[#5A5566] font-medium'>
             Timi is an awesome product designer. She has a good eye for user
             experience and understands how to simplify
           </p>
         </div>
       </div>
       <div className='relative w-[380px] h-[240px]'>
         <Image src='/images/bg.png' width={380} height={380} alt='' />
         <Image
           src='/images/rect2.png'
           width={40}
           height={40}
           alt=''
           className='absolute top-[1px] left-[315px]'
         />
         <div className='absolute top-7 left-7'>
           <Image
             src='/images/black.png'
             width={64}
             height={64}
             alt=''
             className='mb-6'
           />
           <p className='text-lg font-semibold text-[#16063E] mb-1'>
             Visual Design
           </p>
           <p className='text-sm text-[#5A5566] font-medium'>
             Timi is an awesome product designer. She has a good eye for user
             experience and understands how to simplify
           </p>
         </div>
       </div>
       <div className='relative w-[380px] h-[240px]'>
         <Image src='/images/bg.png' width={380} height={380} alt='' />
         <Image
           src='/images/rect3.png'
           width={40}
           height={40}
           alt=''
           className='absolute top-[1px] left-[315px]'
         />
         <div className='absolute top-7 left-7'>
           <Image
             src='/images/black.png'
             width={64}
             height={64}
             alt=''
             className='mb-6'
           />
           <p className='text-lg font-semibold text-[#16063E] mb-1'>
             Product Design
           </p>
           <p className='text-sm text-[#5A5566] font-medium'>
             Timi is an awesome product designer. She has a good eye for user
             experience and understands how to simplify
           </p>
         </div>
       </div>
     </div>
   </section>
 );
}