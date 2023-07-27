import "./Home.css";
import printNewsmain from "../../utils/printrandomnews";

const template = () => {
  return `
    <section id="sec1video">
        <div id="vidabsolut">
            <video src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" autoplay preload="auto" loop playsinline></video>
        </div>
    
      <section id="comentvid">
        <div id="comentposition">
            <p id="text">"A modern multiplayer masterpiece."</p>
            <span id="autor">- Destructoid</span>
            <div id="steamplace"> 
              <a href="https://store.steampowered.com/app/570/Dota_2/" target="_blank" id="steamlink">
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam.svg" alt="logo steam">
                <section>
                    <p id="p1">Play for free</p>
                    <p id="p2">Download on Steam</p>
        
                </section>  
              </a>
             </div> 
        </div>
      </section>
      </section>


      <section id="newsbox">
        <div id="titlelink">
          <p>random news</p>
          <a href="/news" class="linkado">View all →</a>
        </div>
        <div class="randomnews">
          
      </section>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
  printNewsmain();
};

export default Home;
