import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="/">Startseite</Link></li>
                <li className={styles.navItem}><Link to="/about">Informationen</Link></li>
                <li className={styles.navItem}><Link to="/task">Rechnen</Link></li>
                <li className={styles.navItem}><Link to="/dashboard">Dashboard</Link></li>
                <li className={styles.navItem}><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    );
}