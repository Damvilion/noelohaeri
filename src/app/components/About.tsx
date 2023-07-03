'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { planetVariants, staggerContainer } from '../utilities/motion';
import AboutText from './AboutText';
const About = () => {
    return (
        <div className='flex flex-col-reverse items-center gap-10 md:flex-row m-10'>
            <AboutText />
            <motion.div variants={staggerContainer(0, 0)} initial='hidden' viewport={{ once: true, amount: 0.25 }} className=''>
                <motion.div variants={planetVariants('right')} initial='hidden' animate='show' viewport={{ once: true, amount: 0.25 }}>
                    {/* Portfolio Picture */}
                    <div className='mx-auto relative rounded-full w-80 h-80 m-4 overflow-hidden'>
                        <img src='/portfolio.jpg' alt='portfolio_pic' />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
