'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { animatedDelay, staggerContainer, textContainer, textVariant2 } from '../utilities/motion';

type name = {
    name: string;
    style: string;
    delay: number;
};

const TitleText = ({ name, style, delay }: name) => {
    return (
        <section className='flex flex-col items-center justify-center'>
            <motion.div
                variants={staggerContainer(0, delay)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}>
                <motion.p variants={textContainer}>
                    {Array.from(name).map((letter: any, index) => (
                        <motion.span className={`${style}`} variants={textVariant2} key={index}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default TitleText;
