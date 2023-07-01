'use client';
import React from 'react';
import TitleText from './TitleText';
import { motion } from 'framer-motion';
import { planetVariants, staggerContainer } from '../utilities/motion';
import About from './About';

const FrontPage = () => {
    return (
        <section className='flex sm:flex-col sm:items-center items-center justify-center h-screen relative z-0'>
            <div className='absoultePositioning h-[300px] w-[80%] gradient-02 opacity-80 z-10' />
            <div className='z-20'>
                <TitleText name='Noel Ohaeri' style='text-5xl py-2 text-pink-500 font-bold' delay={0.5} reanimate={false} />
                <About />
            </div>
            {/* <div className='absoultePositioning w-[70%] inset-0 gradient-02 opacity-100' /> */}
        </section>
    );
};

export default FrontPage;
