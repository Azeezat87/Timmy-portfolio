
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Service from '../components/service'
import Skill from '../components/skill'
import Work from '../components/work'


export default function Home() {
  
  return (
    <main className='overflow-hidden'>
      <section className='bg-[url("/images/Frame.png")] w-full px-20 py-5'>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Service />
      <Skill />
      <Work />
    </main>
  );
}
