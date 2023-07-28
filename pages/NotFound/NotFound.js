import "./NotFound.css";

const template = () => {
  return `
      <div id="gamebackbox">
        <h2 id="errorh2">Error 404 - Page Not Found</h2> 
        <h3>¡¡¡¡Preguntar a Antonio!!!!</h3>
        <iframe id="gif1" src="https://giphy.com/embed/QKUx6kHItu3ilaVMdn" width="480" height="338" frameBorder="0" ></iframe>
        <iframe id="gif2" src="https://giphy.com/embed/ER2xgGF4SxOy512ewj" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>

      `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;
