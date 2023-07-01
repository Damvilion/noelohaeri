export const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};

export const animatedDelay = (delay: number) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type: 'spring',
            delay,
        },
    },
});

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const fadeIn = (direction: string, type: any, delay: number, duration: number) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const planetVariants = (direction: string) => ({
    hidden: {
        opacity: 0,
        scale: 0.5,
        x: direction === 'left' ? '-100%' : '100%',
        rotate: 120,
    },
    show: {
        x: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 1.8,
            delay: 0.5,
        },
    },
});
