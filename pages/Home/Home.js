import "./Home.css";
import printNewsmain from "../../utils/printrandomnews";

const template = () => {
  return `
    <section id="sec1video">
        <div id="vidabsolut">
            <video src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" autoplay=1 preload="auto" loop playsinline></video>
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

      <section id="joinmain">
          <div id="gridimg">
            <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg" alt="game map image">
          </div>
          <div class="letramap">
            <p class="join">join the</p>
            <p class="battle">Battle of the Ancients</p>
            <div class="lineadecoracion"></div>
            <p class="textmap">Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now.</p>
            <a href="/news" class="linkado">see what's new</a>
          </div>
      </section>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
  printNewsmain();
};

export default Home;
