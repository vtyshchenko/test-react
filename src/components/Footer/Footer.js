import footerStyle from "./Footer.module.css";

function Footer(props) {
  const currentYear = new Date().getFullYear(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)

  return (
    <footer className={footerStyle.footer}>
      <a className={footerStyle.link} href="/">
        Домашній сайт
      </a>
      <p className={footerStyle.copyright}>
        Copyright {currentYear}© Володимир Тищенко
      </p>
      <address>
        {/* <a className={footerStyle.email} href={`mailto:${props.mail}`}>Написати листа</a> */}
        <a
          className={footerStyle.email}
          href={`mailto:vtyshchenko77@gmail.com`}
        >
          Написати листа
        </a>
      </address>
    </footer>
  );
}

export default Footer;
