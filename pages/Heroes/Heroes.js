import "./Heroes.css";

const template = () => {
  return `
      <h2>Aqui estoy Hero</h2>
      `;
};

const Heroes = () => {
  document.querySelector("main").innerHTML = template();
};

export default Heroes;
