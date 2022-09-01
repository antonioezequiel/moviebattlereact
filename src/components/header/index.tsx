import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from 'assets/logo-jogo.jpg';
const Header = () => {
    return (
        <nav>
            <a className={styles.brand}>
                <img src={logo} alt="batalha" />
                <h2>Battle Movies</h2>
            </a>
            <ul className={styles.links}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={styles.add}>
                    <Link to={'/batalha/new'}>Novo jogo</Link>
                </li>
                <li className={styles.addU}>
                    <Link to={'/create-user/new'}>Novo jogador</Link>
                </li>
                <li>
                    <Link to={'/about'}>Sobre Nós</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;