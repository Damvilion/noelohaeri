import Image from 'next/image';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Projects from './components/Projects';
import TechnicalTools from './components/TechnicalTools';

export default function Home() {
    return (
        <main className='bg-black px-10 relative w-[100%] z-0 overflow-hidden'>
            <div className='absoultePositioning h-[300px] w-[80%] gradient-02 opacity-30 z-0' />

            <section className='min-h-screen'>
                <Navbar />
                <FrontPage />
            </section>
            <TechnicalTools />
            <Projects />
        </main>
    );
}
