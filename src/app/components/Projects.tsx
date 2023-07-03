'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer } from '../utilities/motion';
import TitleText from './TitleText';
import { projectList } from '../projectsList';
import ProjectPage from './ProjectPage';

const Projects = () => {
    const [active, setActive] = useState('Villion Chat');
    return (
        <section id='projects' className='py-1'>
            <motion.div variants={staggerContainer(0, 0)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }} className='mx-auto flex flex-col'>
                <TitleText name='Projects' style='' delay={0} reanimate={false} />

                <div className='mt-5 flex flex-col lg:flex-row min-h-[70vh] gap-5'>
                    {projectList.map((project, index) => (
                        <ProjectPage key={index} {...project} index={index} active={active} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
