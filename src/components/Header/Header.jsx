
import styles from './Header.module.css';
import Logo from '../../assets/image/logo-navitech.svg';
function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo_container}>
        <img className={styles.logo_image} src={Logo} alt="logo" />
        <h1>Navitechlabs</h1>
      </div>
    </header>
  );
}

export default Header;