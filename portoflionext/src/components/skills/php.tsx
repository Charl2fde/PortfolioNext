// Importation des hooks React nécessaires et du fichier de styles CSS module.
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/php.module.css'; // Assurez-vous que le chemin vers votre fichier CSS module est correct.

// Définition de l'interface des props attendues par le composant, ici un seul pourcentage.
interface PhpProps {
    percentage: number;
}

// Déclaration du composant fonctionnel Html qui accepte les HtmlProps.
const Php: React.FC<PhpProps> = ({ percentage }) => {
    // useRef pour créer une référence à l'élément DOM qui sera utilisé pour observer l'entrée dans le viewport.
    const ref = useRef(null);
    // useState pour définir et modifier l'état de visibilité du composant.
    const [isVisible, setIsVisible] = useState(false);

    // Constantes pour définir les dimensions du cercle SVG.
    const circleRadius = 85;
    const circleStrokeWidth = 10;
    // Calcul du rayon normalisé pour gérer correctement la largeur de la bordure.
    const normalizedRadius = circleRadius - circleStrokeWidth * 2;
    // Calcul de la circonférence du cercle.
    const circumference = normalizedRadius * 2 * Math.PI;
    // Définition de l'offset initial pour le strokeDashoffset.
    const initialOffset = circumference;
    // useState pour stocker et modifier le strokeDashoffset lors de l'animation.
    const [strokeDashoffset, setStrokeDashoffset] = useState(initialOffset);

    // useEffect pour créer un effet de bord avec l'Intersection Observer.
    useEffect(() => {
        // Création de l'Intersection Observer qui appellera la fonction de callback quand les conditions seront rencontrées.
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Vérification si l'élément est dans le viewport.
                if (entry.isIntersecting) {
                    // Mise à jour de l'état de visibilité.
                    setIsVisible(true);
                    // Mise à jour de l'offset de strokeDash pour déclencher l'animation.
                    setStrokeDashoffset(circumference - (percentage / 100) * circumference);
                    // Déconnexion de l'observer car il n'est plus nécessaire après le déclenchement de l'animation.
                    observer.disconnect();
                }
            },
            {
                // Option de l'observer pour déclencher la callback quand 10% de l'élément est visible.
                threshold: 0.1,
            }
        );

        // Récupération de l'élément DOM actuel référencé.
        const { current } = ref;
        // Si l'élément existe, on commence l'observation.
        if (current) {
            observer.observe(current);
        }

        // Fonction de nettoyage qui sera appelée lorsque le composant sera démonté.
        return () => {
            observer.disconnect();
        };
    }, [percentage, circumference]); // Les dépendances de l'effet, qui déclenchent la réexécution de l'effet si elles changent.

    // JSX du composant qui sera rendu dans le DOM.
    return (
        <div className={styles.progress} ref={ref}>
            <svg
                className={styles.progressSvg}
                width={circleRadius * 2}
                height={circleRadius * 2}
                viewBox={`0 0 ${circleRadius * 2} ${circleRadius * 2}`}
            >
                {/* Cercle de fond - toujours visible */}
                <circle
                    className={styles.progressBg}
                    r={normalizedRadius}
                    cx={circleRadius}
                    cy={circleRadius}
                />
                {/* Cercle de progression - animé */}
                <circle
                    className={styles.progressMeter}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset: isVisible ? strokeDashoffset : initialOffset }}
                    r={normalizedRadius}
                    cx={circleRadius}
                    cy={circleRadius}
                />
            </svg>
            {/* Affichage du pourcentage au centre du cercle */}
            <div className={styles.progressValue}>{percentage}%</div>
        </div>
    );
};

// Exportation par défaut du composant Html pour qu'il soit réutilisable ailleurs.
export default Php;
