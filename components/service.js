import Image from 'next/image'

const Services = ({ className, text }) => (
  <div className={className}>
        <Image src='/images/black.svg' width={64} height={64} alt="" className='mb-7' />
       <p className='text-lg font-semibold text-[#16063E] mb-1'>
         {text}
       </p>
       <p className='text-sm text-[#5A5566] font-medium leading-[21px]'>
         Timi is an awesome product designer. She has a good eye for user
         experience and understands how to simplify
       </p>
  </div>
)

const background = [
  {
    className: 'w-[380px] h-[240px] bg-[url("/images/bg1.png")] py-8 pl-[30.5px] pr-[29.5px]',
    text: 'UX Research',
  },
  {
    className: 'w-[380px] h-[240px] bg-[url("/images/bg2.png")] py-8 pl-[30.5px] pr-[29.5px]',
    text: 'Visual Design',
  },
  {
    className: 'w-[380px] h-[240px] bg-[url("/images/bg3.png")] py-8 pl-[30.5px] pr-[29.5px]',
    text: 'Product Design',
  }
]

export default function Service() {
 return (
   <section className='mt-32'>
     <div className='container md:px-5'>
     <h1 className='text-[52px] [text-#16063E] mb-14 font-semibold'>
       Services
     </h1>
     <div className='flex gap-7'>
      {background.map((bg, index) => (
        <Services 
          key={index}
          text={bg.text}
          className={bg.className}
        />
      ))}
       </div>
    </div>
   </section>
 );
}