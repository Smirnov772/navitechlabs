
import styles from './Header.module.css';
import Logo from '../../assets/image/logo-navitech.svg';
function Header() {
  return (
      <header className="flex w-full justify-between px-[132px] py-2 max-md:px-5">
        <div className={styles.logo_container}>
          <img className={styles.logo_image} src={Logo} alt="logo"/>
          <h1 className={styles.logo_text}>Navitechlabs</h1>
        </div>
        <div className="flex">
          <nav className="flex gap-10 items-center self-stretch px-10 my-auto text-xl text-center rounded-3xl bg-neutral-200 min-h-[56px] min-w-[240px] text-[color:var(--,#161414)] max-md:px-5">
            <a href="#services" className="self-stretch my-auto">Услуги</a>
            <a href="#team" className="self-stretch my-auto">Команда</a>
          </nav>
        </div>
      </header>
  );
}

export default Header;