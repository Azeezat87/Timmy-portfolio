
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Service from '../components/service'
import Skill from '../components/skill'
import Work from '../components/work'
import Clients from '../components/clients'
import Featured from '../components/featured'
import Project from '../components/project'
import Footer from '../components/footer'

export default function Home() {
  
  return (
    <>
      <section className='bg-[url("/images/Frame.png")] '>
        <div className='container mbl:px-5 '>
          <Navbar />
          <Hero />
        </div>
      </section>
      <About />
      <Service />
      <Skill />
      <Work />
      <Clients />
      <Featured />
      <Project />
      <Footer />
    </>
  );
}
