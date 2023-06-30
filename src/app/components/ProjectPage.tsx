'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { navVariants, fadeIn } from '../utilities/motion';

const ProjectPage = ({ id, imgUrl, title, index, active, handleClick }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${
                active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7] ease-out-flex cursor-pointer`}>
            <img src={imgUrl} alt={title} className='absolute w-full h-full object-cover rounded-md' />
            <img src='chatpic.png' />
        </motion.div>
    );
};

export default ProjectPage;
