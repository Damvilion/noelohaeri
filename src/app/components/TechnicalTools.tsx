'use client';
import React from 'react';
import { ToolsList } from '../projectsList';
import { motion } from 'framer-motion';
import { fadeIn, fadeInRoll, planetVariants, staggerContainer } from '../utilities/motion';

const TechnicalTools = () => {
    return (
        <div className='flex justify-center flex-wrap gap-5 mb-5'>
            <motion.div variants={staggerContainer(0, 0)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }} className='flex justify-center gap-5 items-center'>
                {ToolsList.map(({ id, imgUrl }) => (
                    <motion.div key={id} variants={fadeInRoll('left', 'spring', id * 0.5, 0.75)}>
                        <img src={imgUrl} alt='react image' height={80} width={80} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechnicalTools;
