'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer } from '../utilities/motion';
import TitleText from './TitleText';
import { projectList } from '../projectsList';
import ProjectPage from './ProjectPage';

const Projects = () => {
    const handleChange = () => {};
    return (
        <section id='projects' className='py-1 flex flex-col items-center'>
            <h1>projects</h1>
            <div className='flex justify-center flex-wrap'>
                <div className=' text-center shadow-lg rounded-xl my-10  duration-100 '>
                    <div className=' max-w-[90%] rounded-md overflow-hidden my-2 w-[100%] mx-auto'>
                        <img src='/images/chatAppImgs/chatpic.jpg' alt='react_logo' className='mx-auto' />
                    </div>
                    <div className='flex justify-center gap-5 relative z-20'>
                        <button onClick={handleChange} className='cursor-pointer'>
                            Image
                        </button>
                        <button onClick={handleChange} className='cursor-pointer'>
                            Image
                        </button>
                    </div>

                    <h2 className='text-xl font-medium pt-8 pb-2'>Real Time Chat App</h2>
                    <div className=' mx-auto py-2'></div>
                    <div className='py-4 text-teal-600 flex justify-evenly relative z-20'>
                        <a href='https://github.com/Damvilion/real-time-chat' target='_blank'>
                            Source Code
                        </a>
                        <span>|</span>
                        <a href='https://villion-chat.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
