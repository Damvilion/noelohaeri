'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { navVariants } from '../utilities/motion';

const Navbar = () => {
    return (
        <motion.nav variants={navVariants} initial='hidden' whileInView='show' className='py-8 relative' viewport={{ once: true }}>
            <div className='absolute w-[70%] inset-0 gradient-01' />
            <div className='flex justify-between items-center'>
                <h1>Developed by Noel</h1>
                <a
                    href='#'
                    target='_blank'
                    className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md ml-8'>
                    resume
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
