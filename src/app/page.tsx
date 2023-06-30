import Image from 'next/image';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Projects from './components/Projects';

export default function Home() {
    return (
        <main className='bg-black px-10'>
            <Navbar />
            <FrontPage />
            <Projects />
        </main>
    );
}
