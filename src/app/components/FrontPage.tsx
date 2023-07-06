'use client';
import React from 'react';
import TitleText from './TitleText';
import { motion } from 'framer-motion';
import { planetVariants, staggerContainer } from '../utilities/motion';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import About from './About';

const FrontPage = () => {
    return (
        <section className='flex sm:flex-col sm:items-center items-center justify-center relative'>
            <div className='absoultePositioning h-[300px] w-[80%] gradient-02 opacity-80 z-0' />
            <div className='z-20'>
                <div className='flex flex-col items-center'>
                    <TitleText name='Noel Ohaeri' style='text-5xl py-2 text-pink-500 font-bold font-Inter' delay={0.5} reanimate={false} />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.8 }}>
                        <h3 className='text-2xl py-2 text-white'>Software Engineer</h3>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.8 }}>
                        <div className='text-5xl gap-1 flex justify-center'>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{
                                    scale: 0.8,

                                    borderRadius: '100%',
                                }}>
                                <a href='http://www.linkedin.com/in/noelohaeri' target='_blank' className='cursor-pointer'>
                                    <AiFillLinkedin />
                                </a>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{
                                    scale: 0.8,

                                    borderRadius: '100%',
                                }}>
                                <a href='http://www.github.com/damvilion' target='_blank' className='cursor-pointer'>
                                    <AiFillGithub />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <About />
            </div>
            {/* <div className='absoultePositioning w-[70%] inset-0 gradient-02 opacity-100' /> */}
        </section>
    );
};

export default FrontPage;
