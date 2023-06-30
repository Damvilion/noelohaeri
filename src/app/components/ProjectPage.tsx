'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { navVariants, fadeIn } from '../utilities/motion';
import chatimage from './chatpic.jpg';
import Image from 'next/image';

const ProjectPage = ({ id, imgUrl, title, index, active, handleClick }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${
                active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7] ease-out-flex cursor-pointer`}>
            <img src={imgUrl} alt={title} className='absolute w-full h-full object-cover rounded-md' />

            {/* <Image src={chatimage} alt={title} width={0} height={0} className='absolute w-full h-full object-cover rounded-md' /> */}
        </motion.div>
    );
};

export default ProjectPage;
