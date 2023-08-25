/* eslint-disable @next/next/no-img-element */

export default function Featured() {
 return (
   <section className=' flex pl-[70px] mbl:px-5'>
     <div className='w-[465px]'>
       <h1 className='text-[52px] text-[#16063E] font-medium leading-[62.4px] tracking-[-0.52px] mb-3'>
             Some
             <br />
             Featured Designs
       </h1>
       <p className='w-[417px] text-xl text-[#5A5566] leading-[30px] tracking-[1px] mb-[79px]'>
         A Product Designer that specialises in designing usable solutions that
         aligns with business goals
       </p>
       <div className='flex gap-4'>
         <img src='/images/icon.svg' width='52.5px' height='40px' alt='' />
         <img src='/images/icon2.svg' width='52.5px' height='40px' alt='' />
       </div>
     </div>
     <div className='max-w-[556px] mr-7'>
       <img src='/images/featured1.svg' width='' height='' alt='' />
     </div>
     <div>
       <img src='/images/featured2.svg' width='' height='' alt='' />
     </div>
   </section>
 );
}