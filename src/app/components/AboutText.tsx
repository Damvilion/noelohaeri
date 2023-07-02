'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const AboutText = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.8 }}>
            <p>AboutText</p>
            <RoughNotation type='underline' show={true} animate={true} animationDelay={1800}>
                Hello RoughNotation
            </RoughNotation>
        </motion.div>
    );
};
export default AboutText;
