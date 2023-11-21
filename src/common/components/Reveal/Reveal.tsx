import React, {ReactNode, useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";

type RevealProps = {
    children: ReactNode
    width?: 'fit content' | '100%'
}

export const Reveal = ({children, width = 'fit content'}: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial={'hidden'}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
