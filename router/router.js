import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";
import Heroes from "../pages/Heroes/Heroes";
import News from "../pages/News/News";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/game",
    component: Game,
  },
  {
    path: "/heroes",
    component: Heroes,
  },
  {
    path: "/news",
    component: News,
  },
];

export const router = () => {
  const path = window.location.pathname;
  const { component } = routes.find((route) => route.path === path) || {
    component: NotFound,
  };
  if (component) {
    component();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", router);

export const addLinkListeners = () => {
  const navLinks = document.querySelectorAll(".linkado");
  console.log(navLinks);

  navLinks.forEach((link) => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      const href = link.getAttribute("href");
      history.pushState(null, null, href);
      router();
    });
  });
};
