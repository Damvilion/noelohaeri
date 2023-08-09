'use client';
import React, { useEffect, useState } from 'react';
import { priorityBlendPics } from '../../../../public/images/chatAppImgs';
import { motion } from 'framer-motion';
import { Drawer } from 'vaul';

const PriorityHub = () => {
    const [slide, setSlide] = useState(0);
    const [currentImg, setCurrentImg] = useState(priorityBlendPics[slide].imgUrl);

    useEffect(() => {
        setCurrentImg(priorityBlendPics[slide].imgUrl);
    }, [slide]);

    const nextSlide = () => {
        if (slide >= priorityBlendPics.length - 1) {
            setSlide(0);
        } else {
            setSlide((prevSlide) => prevSlide + 1);
        }
    };

    return (
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

                    <h2 className='text-xl font-medium pt-8 pb-2'>Priority Hub</h2>
                    <div className=' mx-auto py-2'></div>
                    <div className='py-4 text-[#EC4899] flex justify-evenly relative z-20'>
                        <a href='https://github.com/Damvilion/priorityhub' target='_blank'>
                            Source Code
                        </a>
                        <span>|</span>
                        <Drawer.Root>
                            <Drawer.Trigger asChild>
                                <button>Project</button>
                            </Drawer.Trigger>
                            <Drawer.Portal>
                                <Drawer.Overlay className='fixed inset-0 bg-black/40' />
                                <Drawer.Content className='bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 bottom-0 left-0 right-0 fixed z-50'>
                                    <div className='p-4 bg-[#312d38] rounded-t-[10px] flex-1'>
                                        <div className='mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8' />
                                        <div className='max-w-md mx-auto'>
                                            <Drawer.Title className='font-medium mb-4 text-center text-white'>Priority Hub</Drawer.Title>
                                            <p className='text-zinc-100 mb-2 text-center'>
                                                Elevate your productivity with Priority Hub: the ultimate task management app. Effortlessly drag and
                                                drop tasks between columns for seamless organization and progress tracking, empowering you to stay on
                                                top of your priorities.
                                            </p>

                                            <a href='https://priorityhub-six.vercel.app/' target='_blank' rel='noopener noreferrer'>
                                                <p className='text-center text-[#EC4899]'>
                                                    <button className='cursor-pointer rounded bg-[#EC4899] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] hover:bg-[#ff4fa7]'>
                                                        Project
                                                    </button>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </Drawer.Content>
                            </Drawer.Portal>
                        </Drawer.Root>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PriorityHub;
