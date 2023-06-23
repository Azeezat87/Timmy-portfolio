
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Service from '../components/service'
import Skill from '../components/skill'
import Work from '../components/work'


export default function Home() {
  
  return (
    <main className='border-2 border-green-500'>
      <section className='bg-[url("/images/Frame.png")]'>
        <div className='container'>
          <Navbar />
          <Hero />
        </div>
      </section>
      <About />
      <Service />
      <Skill />
      <Work />
    </main>
  );
}
