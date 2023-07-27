import "./News.css";
import printNewsNews from "../../utils/newspageprinter";

const template = () => {
  return `
      <section id="titlenews">
        <h2>Check out the News</h2>
      </section>
      <div id="biboxnews">
        <section class="randomnews">

        </section>
      </div>
      `;
};

const News = () => {
  document.querySelector("main").innerHTML = template();
  printNewsNews();
};

export default News;
