// pages/MonComposant.tsx

import React, { useEffect } from 'react';
import styles from '@/styles/html.module.css';

const Html = () => {
    return (
        <div className={styles.compétences}>
            <div className={styles.rating}>
                <h2>
                    <span className={styles.counter} data-target="90">90</span><sup>%</sup>
                    <p>HTML</p>
                </h2>
            </div>
        </div>
    );
};

export default Html;
