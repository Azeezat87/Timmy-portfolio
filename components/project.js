import {Button} from '../components/Button'

export default function Project() {
 return (
   <section className='mt-32'>
     <div className='container bg-[url("/images/footer.png")] max-h-[327px] py-[43px]'>
       <div className='flex flex-col max-w-[650px]'>
         <h1 className='text-[60px] text-[#FFFFFF] leading-[67.8px] tracking-[-0.6px]'>
           Have a project in mind?
           <br />
           Let’s work together
         </h1>
         <Button
           text='Contact me'
           className='relative text-xl border-2 border-[#16063E] px-[43px] py-[18px] font-bold'
         />
       </div>
     </div>
   </section>
 );
}