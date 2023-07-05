/* eslint-disable @next/next/no-img-element */


const Client = ({ src, title, description }) => (
  <div className='flex flex-col p-8 w-[381px] h-[242px] bg-[url("/images/box.png")] '>
    <div className='flex gap-3 mb-5'>
      <img src={src} width={55} height={55} alt='' className='' />
      <div className='flex flex-col gap-[5px]'>
        <p className='text-xl font-semibold text-[#16063E] leading-6'>
          {title}
        </p>
        <p>Head of Products, Jeetar</p>
      </div>
    </div>
    <div>
      <p className='text-sm text-[#7B748B] font-medium leading-[22.4px] tracking-[0.14px]'>
        {description}
      </p>
    </div>
  </div>
);

const background = [
  {
    src: '/images/client1.png',
    title: 'Lateef Akinyemi',
    description: 'Oluwatimilehin is one of the best designers I have worked with and managed. Her zeal to work is unmatched, and she has a great managerial skill as well; her creative thought process is well second to none.'
  },
  {
    src: '/images/client2.png',
    title: 'Anayo Obiajulu',
    description: 'Oluwatimilehin is an awesome product designer. She has a good UX knowledge  and understands how to simplify processes and actions for users. Her designs are quite simple, neat and  very visually appealing.'
  },
  {
    src: '/images/client3.png',
    title: 'Oghenetega Agadagba',
    description: "Oluwatimilehin is a highly creative product designer who is dedicated to her client's needs and focuses on providing user-centric solutions. She is a goal-getter and possesses a great collaboration skills."
  },
];


export default function Clients() {
return (
  <section className='mt-32'>
    <div className='container'>
      <div className='flex gap-[486.5px]'>
        <h1 className='text-[52px] [text-#16063E] font-semibold'>
          What clients have to say
        </h1>
        <div className='flex gap-4'>
          <img src='/images/icon.svg' alt='' />
          <img src='/images/icon2.svg' alt='' />
        </div>
      </div>
      <div className='flex gap-7 mt-14'>
        {background.map((bg, index) => (
          <Client
            key={index}
            src={bg.src}
            title={bg.title}
            description={bg.description}
          />
        ))}
      </div>
      <div className='flex justify-center items-center mt-8 gap-[6px] mb-10'>
        <span className='bg-[#7444EE] w-3 h-3 rounded-full'></span>
        <span className='bg-[#DCD0FB] w-2 h-2 rounded-full'></span>
        <span className='bg-[#DCD0FB] w-[6px] h-[6px] rounded-full'></span>
      </div>
    </div>
  </section>
);
}