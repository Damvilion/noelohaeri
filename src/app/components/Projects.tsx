'use client';
import React, { useEffect } from 'react';

import ChatApp from './ChatApp';
import Timeblend from './Timeblend';

const Projects = () => {
    return (
        <section id='projects' className='py-1 flex flex-col items-center text-white'>
            <h1>projects</h1>
            <ChatApp />
            <Timeblend />
        </section>
    );
};

export default Projects;
