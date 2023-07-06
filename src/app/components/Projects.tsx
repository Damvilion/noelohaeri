'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { chatList } from '../../../public/images/chatAppImgs';
import { motion } from 'framer-motion';

const Projects = () => {
    const [slide, setSlide] = useState(0);
    const [currentImg, setCurrentImg] = useState(chatList[slide].imgUrl);

    useEffect(() => {
        setCurrentImg(chatList[slide].imgUrl);
    }, [slide]);

    const nextSlide = () => {
        if (slide >= chatList.length - 1) {
            setSlide(0);
        } else {
            setSlide((prevSlide) => prevSlide + 1);
        }
    };

    return (
        <section id='projects' className='py-1 flex flex-col items-center text-white'>
            <h1>projects</h1>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className='flex justify-center flex-wrap'>
                    <div className=' text-center shadow-lg rounded-xl my-10  duration-100 '>
                        <div className=' max-w-[90%] rounded-md overflow-hidden my-2 mx-auto'>
                            <img src={`${currentImg}`} alt='chatapp_images' className='mx-auto p-1' />
                        </div>
                        <div className='flex justify-center gap-5 relative z-20'>
                            <button
                                onClick={nextSlide}
                                className='cursor-pointer rounded bg-[#EC4899] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] hover:bg-[#ff4fa7]'>
                                Next Image
                            </button>
                        </div>

                        <h2 className='text-xl font-medium pt-8 pb-2'>Real Time Chat App</h2>
                        <div className=' mx-auto py-2'></div>
                        <div className='py-4 text-[#EC4899] flex justify-evenly relative z-20'>
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
            </motion.div>
        </section>
    );
};

export default Projects;
