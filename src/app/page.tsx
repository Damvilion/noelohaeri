import Image from 'next/image';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';

export default function Home() {
    return (
        <main className='bg-black px-10'>
            <Navbar />
            <FrontPage />
        </main>
    );
}
