import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/html.module.css';

interface BarProps {
    index: number;
    isActive: boolean;
}

const Bar: React.FC<BarProps> = ({ index, isActive }) => (
    <i
        style={{ '--i': index } as React.CSSProperties}
        className={`${styles.bar} ${isActive ? styles['selected-demo'] : ''}`}
    ></i>
);

const Html = () => {
    const barCount = 50;
    const percentDemo = (barCount * 90) / 100;
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.progress} ref={ref} style={{ '--tlt-br-cnt': barCount } as React.CSSProperties}>
            {Array.from({ length: barCount }, (_, index) => (
                <Bar
                    key={index}
                    index={index}
                    isActive={index < percentDemo && isInView}
                />
            ))}
            <p className={`${styles['percent-text']} ${isInView ? styles['animate-text'] : ''}`}>
                90%
            </p>
        </div>
    );
};

export default Html;
