import navbarStyle from "./Navbar.module.css";

function Navbar() {
  return <nav className={navbarStyle.navbar}></nav>;
  // return <nav className={`${navbarStyle.navbar} ${navbarStyle.active}`}>Navbar</nav>;
}

export default Navbar;
