import "./Game.css";

const template = () => {
  return `
      <h2>Aqui estoy Game</h2>
      `;
};

const Game = () => {
  document.querySelector("main").innerHTML = template();
};

export default Game;
