import "./NotFound.css";

const template = () => {
  return `
      <h2>Aqui estoy NotFound</h2>
      `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;
