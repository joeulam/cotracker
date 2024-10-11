import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-[url('/assets/background-home.jpg')] bg-scroll bg-cover bg-center h-[100vh]">
      <NavBar page="home"/>
      <Footer/>
      {/* Commented for navbar debugging

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          CoTrackers
        </p>
      </div> */}
    </main>
  )
}
