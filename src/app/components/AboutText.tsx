'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const AboutText = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.8 }} className=''>
            <div>
                <div className='flex flex-wrap max-w-xl'>
                    <p className='text-center'>
                        A{' '}
                        <RoughNotation type='highlight' show={true} animationDelay={2300} color='purple'>
                            dedicated
                        </RoughNotation>{' '}
                        software engineer specializing in creating exceptional digital experiences. With a strong focus on{' '}
                        <RoughNotation type='highlight' show={true} animationDelay={2900} color='red'>
                            quality and precision
                        </RoughNotation>{' '}
                        , I leverage my expertise in front-end development to craft elegant and intuitive user interfaces. My toolkit includes React.js, Next.js, JavaScript/TypeScript, and Tailwind
                        CSS, enabling me to build visually stunning and{' '}
                    </p>

                    <p className='mx-auto'>
                        <RoughNotation type='highlight' show={true} animationDelay={3700} color='red'>
                            user-friendly applications
                        </RoughNotation>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
export default AboutText;
