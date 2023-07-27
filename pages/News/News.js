import "./News.css";

const template = () => {
  return `
      <h2>Aqui estoy News</h2>
      `;
};

const News = () => {
  document.querySelector("main").innerHTML = template();
};

export default News;
