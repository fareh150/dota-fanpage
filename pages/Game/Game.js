import "./Game.css";

const template = () => {
  return `
      <div id="gamebackbox">
        <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/blog/default_header.jpg" alt="game img">
      </div>
      `;
};

const Game = () => {
  document.querySelector("main").innerHTML = template();
};

export default Game;
