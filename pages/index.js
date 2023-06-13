
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Service from '../components/service'
import Skill from '../components/skill'


export default function Home() {
  
  return (
    <main className=''>
      <section className='bg-[url("/images/Frame.png")] w-full px-20 py-5'>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Service />
      <Skill />
    </main>
  );
}
