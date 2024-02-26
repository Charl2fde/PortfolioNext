import React from 'react';
import styles from '@/styles/Slider.module.css'; // Assurez-vous que le chemin est correct.

// Interface pour les props de chaque slide
interface SlideData {
    title: string;
    description: string;
    imageUrl: string;
}

// Props pour le composant Slider
interface SliderProps {
    slides: SlideData[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    return (
        <div className={styles.slider}>
            {slides.map((slide, index) => (
                <div key={index} className={styles.slide}>
                    <img src={slide.imageUrl} alt={slide.title} className={styles.image} />
                    <h2 className={styles.title}>{slide.title}</h2>
                    <p className={styles.description}>{slide.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Slider;
