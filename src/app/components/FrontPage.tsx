'use client';
import React from 'react';
import TitleText from './TitleText';

const FrontPage = () => {
    return (
        <section className='flex sm:flex-col sm:items-center justify-center h-screen'>
            <TitleText name='Noel Ohaeri' style='text-5xl py-2 text-pink-500 font-bold' delay={0.5} />
        </section>
    );
};

export default FrontPage;
