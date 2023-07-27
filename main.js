import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { router, addLinkListeners } from "./router/router";
import menuFunction from "./utils/navmenu";
import printNewsmain from "./utils/printrandomnews";

Header();
Footer();

router();
addLinkListeners();

//function link nav
menuFunction();

printNewsmain();
