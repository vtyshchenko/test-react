import { Link } from "react-router-dom";
import MenuItemStyle from "./MenuItem.module.css";

function MenuItem(props) {
  return (
    <a className={MenuItemStyle.link} href={props.link}>
      {props.name}
    </a>
  );
}

export default MenuItem;
