import "./Home.css";

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
        <div id="randomnews">
          <div class="fondonew" style="
              background-image: url('https://clan.cloudflare.steamstatic.com/images/3703047/fe0bb9d256a1c7dbd1a6cfb46ecbf113e727ce4a.png');
            ">
            <section
            class="randomnewsclass">
            <p class="datenews">27 de julio de 2023</p>
            <h2 class="titlenews">Between the Lanes: Unbreaking A Bomb</h2>
            <p class="datanews">
              Introducing Between the Lanes, a new blog feature where we let
              members of our development team walk through some of the
              challenges, bugfixes, and occasional happy accidents we...
            </p>
          </section>
          </div>
          <div class="fondonew" style="
              background-image: url('https://clan.cloudflare.steamstatic.com/images/3703047/fe0bb9d256a1c7dbd1a6cfb46ecbf113e727ce4a.png');
            ">
            <section
            class="randomnewsclass">
            <p class="datenews">27 de julio de 2023</p>
            <h2 class="titlenews">Between the Lanes: Unbreaking A Bomb</h2>
            <p class="datanews">
              Introducing Between the Lanes, a new blog feature where we let
              members of our development team walk through some of the
              challenges, bugfixes, and occasional happy accidents we...
            </p>
          </section>
          </div><div class="fondonew" style="
              background-image: url('https://clan.cloudflare.steamstatic.com/images/3703047/fe0bb9d256a1c7dbd1a6cfb46ecbf113e727ce4a.png');
            ">
            <section
            class="randomnewsclass">
            <p class="datenews">27 de julio de 2023</p>
            <h2 class="titlenews">Between the Lanes: Unbreaking A Bomb</h2>
            <p class="datanews">
              Introducing Between the Lanes, a new blog feature where we let
              members of our development team walk through some of the
              challenges, bugfixes, and occasional happy accidents we...
            </p>
          </section>
          </div>
        </div>
      </section>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
