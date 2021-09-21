import logo from "../../logo.svg";
import headerStyle from "./Header.module.css";
import MenuItem from "./MenuItem.js";

function Header() {
  return (
    <header className={headerStyle.header}>
      <img className={headerStyle.logo} src={logo} alt="logo" />
      <nav className={headerStyle.nav}>
        <MenuItem name="Головна" link="/" />
        <MenuItem name="Бухгалтерія" link="/buhgalt" />
        <MenuItem name="Автомобіль" link="/avtomobile" />
        <MenuItem name="Своїми руками" link="/handmade" />
        <MenuItem name="Лікування" link="/healing" />
        <MenuItem name="Містика" link="/mistiq" />
        <MenuItem name="Інформація" link="/info" />
        <MenuItem name="Зброя" link="/weapon" />
        <MenuItem name="Мультимедіа" link="/multimedia" />
        <MenuItem name="Фотоальбом" link="/fotoalbum" />
        <MenuItem name="Контакти" link="/contacts" />
        <MenuItem name="Про нас" link="/about" />
      </nav>
    </header>
  );
}

export default Header;
