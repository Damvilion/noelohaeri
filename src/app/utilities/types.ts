interface staggerContainer {
    (staggerChildren: number, delayChildren: number): void;
    hidden: {};
    show: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
}
