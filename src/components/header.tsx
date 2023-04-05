import  Logo from '../assets/Logo.png'
import styles from './header.module.css'

export const Header = () => {
    return (
        <div className={styles.containerHeader}>
            <div className={styles.logoHeader}>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
} 