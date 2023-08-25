import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <main className='w-screen overflow-x-hidden'>
          <Component {...pageProps} />
         </main>
}
