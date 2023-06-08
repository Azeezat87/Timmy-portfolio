
import Navbar from '../components/navbar'
import Hero from '../components/hero'


export default function Home() {
  
  return (
    <main className=''>
      <section className='bg-[url("/images/Frame.png")] h-screen w-full px-24 py-5'>
          <Navbar />
          <Hero />
      </section>
    </main>
  );
}
