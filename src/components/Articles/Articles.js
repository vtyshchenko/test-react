import { BrowserRouter, Route } from "react-router-dom";
import Comments from "./Comments/Comments.js";
import ArticlesStyle from "./Articles.module.css";
import Buhgalt from "./Buhgalt/Buhgalt.js";
import Avtomobile from "./Avtomobile/Avtomobile.js";
import Handmade from "./Handmade/Handmade.js";
import Healing from "./Healing/Healing.js";
import Mistiq from "./Mistiq/Mistiq.js";
import Info from "./Info/Info.js";
import Weapon from "./Weapon/Weapon.js";
import Multimedia from "./Multimedia/Multimedia.js";
import Fotoalbum from "./Fotoalbum/Fotoalbum.js";
import Contacts from "./Contacts/Contacts.js";
import About from "./About/About.js";

function Articles() {
  return (
    <BrowserRouter>
      <article className={ArticlesStyle.articles}>
        <Route path="/buhgalt" component={Buhgalt} />
        <Route path="/avtomobile" component={Avtomobile} />
        <Route path="/handmade" component={Handmade} />
        <Route path="/healing" component={Healing} />
        <Route path="/mistiq" component={Mistiq} />
        <Route path="/info" component={Info} />
        <Route path="/weapon" component={Weapon} />
        <Route path="/multimedia" component={Multimedia} />
        <Route path="/fotoalbum" component={Fotoalbum} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Comments />
      </article>
    </BrowserRouter>
  );
}

export default Articles;
