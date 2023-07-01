import React from 'react';
import { motion } from 'framer-motion';

const AboutText = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.8 }}>
            <p>AboutText</p>
        </motion.div>
    );
};

export default AboutText;
