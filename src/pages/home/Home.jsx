import './Home.css';
import Navbar from '../../Components/Navbar';

const Home = () => {
  return (
    <main className='w-[100vw] h-[100vh] flex items-center p-4'>
      <section className='flex h-full'>
        <Navbar />
      </section>
      <section className='h-full w-[100%] ps-4 flex flex-col justify-between'>
        <article className='h-[20%] w-[100%] bg-black mb-2 rounded-3xl'>
          
        </article>
        <article className='h-[80%] w-[100%] bg-black mt-2 rounded-3xl'></article>
      </section>
    </main>
  ) 
}

export default Home