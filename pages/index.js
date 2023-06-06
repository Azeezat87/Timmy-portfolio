import { useEffect } from 'react';
import WebFont from 'webfontloader'
import Navbar from '../components/navbar'
import Hero from '../components/hero'


export default function Home() {
  useEffect(() => {
  WebFont.load({
    font: {
      families: ['Okta Neue', 'sans-serif'],
    },
  });
  }, [])
  
  return (
    <main className='font-loader'>
      <section className='gradient h-screen w-full px-24 py-5'>
          <Navbar />
          <Hero />
      </section>
    </main>
  );
}
