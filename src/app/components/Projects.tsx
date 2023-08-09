'use client';
import React, { useEffect } from 'react';

import ChatApp from './projects/ChatApp';
import Timeblend from './projects/Timeblend';
import PriorityHub from './projects/PriorityHub';

const Projects = () => {
    return (
        <section id='projects' className='py-1 flex flex-col items-center text-white'>
            <h1>projects</h1>
            <ChatApp />
            <PriorityHub />
            <Timeblend />
        </section>
    );
};

export default Projects;
