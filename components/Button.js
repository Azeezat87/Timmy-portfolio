export const Button = ({ text, onClick, className }) => (
    <button className={className}>
      {text}
      <span className='absolute -top-1.5 -right-1.5 border-2 border-[#16063E] p-[3px] bg-white'></span>
      <span className='absolute -top-1.5 -left-1.5 border-2 border-[#16063E] p-[3px] bg-white'></span>
      <span className='absolute -bottom-1.5 -right-1.5 border-2 border-[#16063E] p-[3px] bg-white'></span>
      <span className='absolute -bottom-1.5 -left-1.5 border-2 border-[#16063E] p-[3px] bg-white'></span>
    </button>
  );