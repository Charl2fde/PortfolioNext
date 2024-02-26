import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/css.module.css';

interface CssProps {
    percentage: number;
}

const Css: React.FC<CssProps> = ({ percentage }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const circleRadius = 85;
    const circleStrokeWidth = 10;
    const normalizedRadius = circleRadius - circleStrokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const initialOffset = circumference;
    const [strokeDashoffset, setStrokeDashoffset] = useState(initialOffset);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Lorsque l'élément est visible sur la page
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setStrokeDashoffset(circumference - (percentage / 100) * circumference);
                    observer.disconnect(); // Nous n'avons plus besoin de l'observer après cela
                }
            },
            {
                threshold: 0.1, // Déclenchez l'animation lorsque 10% de l'élément est visible
            }
        );

        const { current } = ref;
        if (current) {
            observer.observe(current);
        }

        return () => {
            observer.disconnect();
        };
    }, [percentage, circumference]);

    return (
        <div className={styles.progress} ref={ref}>
            <svg
                className={styles.progressSvg}
                width={circleRadius * 2}
                height={circleRadius * 2}
                viewBox={`0 0 ${circleRadius * 2} ${circleRadius * 2}`}
            >
                <circle
                    className={styles.progressMeter}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset: isVisible ? strokeDashoffset : initialOffset }}
                    r={normalizedRadius}
                    cx={circleRadius}
                    cy={circleRadius}
                />
                {Array.from({ length: 100 }, (_, i) => (
                    <line
                        key={i}
                        y1={circleRadius - 5}
                        y2={circleRadius - 15}
                        transform={`rotate(${(360 / 100) * i} ${circleRadius} ${circleRadius})`}
                        className={styles.progressMarker}
                    />
                ))}
            </svg>
            <div className={styles.progressValue}>{percentage}%</div>
        </div>
    );
};

export default Css;
