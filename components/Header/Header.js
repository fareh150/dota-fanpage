import "./Header.css";

const template = () => {
  return `
    <nav>
        <a href="/" class="home linkado"><img src="/logos/logoDota.png" alt="Dota icon" id="icon"></a>
        <a href="/" class="home linkado"><img src="/logos/logoLetras.png" alt="Dota icon with name" id="letra"></a>
        <div id="links">
        <ul id="lista">
          <li><a href="/game" id="gamelink" class="linkado">Game</a></li>
          <li><a href="/heroes" id="heroeslink" class="linkado">Heroes</a></li>
          <li><a href="/news" id="newslink" class="linkado">News</a></li>
        </ul>
        </div>
        <a href="#null" id="menu"><img src="/icons/menu.png" alt="menu icon" id="menupic"></a>
      </nav>
    `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
