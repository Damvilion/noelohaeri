import Image from 'next/image';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Projects from './components/Projects';
import TechnicalTools from './components/TechnicalTools';

export default function Home() {
    return (
<<<<<<< HEAD
        <main className='bg-black px-10 relative w-[100%] overflow-hidden font-Inter'>
            <div className='absoultePositioning h-[300px] w-[80%] gradient-02 opacity-30 z-1' />
=======
        <main className='bg-black px-10 relative w-[100%] z-10 overflow-hidden font-Inter'>
            <div className='absoultePositioning h-[300px] w-[80%] gradient-02 opacity-30 z-0' />
>>>>>>> a9a4f95acb95db0411a7798535f136fa968030ac

            <section className='min-h-screen'>
                <Navbar />
                <FrontPage />
            </section>
            <TechnicalTools />
            <Projects />
        </main>
    );
}
