// components/NavBar.js
import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src='/images/logo_portfolio-removebg-preview.png' alt='logo portfolio'/>
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link href="/">
                    Accueil
                </Link>
                <Link href="/about">
                    À propos
                </Link>
                <Link href="/projects">
                    Projets
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
