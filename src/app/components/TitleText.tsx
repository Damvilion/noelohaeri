'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { animatedDelay, staggerContainer, textContainer, textVariant2 } from '../utilities/motion';

type name = {
    name: string;
};

const TitleText = ({ name }: name) => {
    return (
        <section className='flex flex-col items-center justify-center'>
            <motion.div
                variants={staggerContainer(0, 0.8)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}>
                <motion.p variants={textContainer}>
                    {Array.from(name).map((letter: any, index) => (
                        <motion.span className='text-5xl py-2 text-pink-500 font-bold' variants={textVariant2} key={index}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default TitleText;
