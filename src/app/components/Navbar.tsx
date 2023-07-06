'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { navVariants } from '../utilities/motion';

const Navbar = () => {
    return (
        <nav className='py-10 mb-12'>
            <motion.nav variants={navVariants} initial='hidden' whileInView='show' className='py-8 relative z-10' viewport={{ once: true }}>
                <div className='absolute h-[300px] w-[80%] gradient-01 opacity-20 z-2' />
                <div className='flex justify-between items-center relative z-10'>
                    <h1>Developed by Noel</h1>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: 10,
                            borderRadius: '100%',
                        }}>
                        <a href='/Resume.pdf' target='_blank' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md ml-8'>
                            Resume
                        </a>
                    </motion.div>
                </div>
            </motion.nav>
        </nav>
    );
};

export default Navbar;
