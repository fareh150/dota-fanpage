import "./Footer.css";

const template = () => {
  return `
  <section id="footbox">
  <div id="imgbox">
    <a href="https://www.valvesoftware.com/en/about" id="valveicon" Target="_blank"><img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" alt="valve icon" ></a>
    <a href="/" id="dotaicon" class="linkado"><img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png" alt="dota icon"></a>
  </div>
  <p>
    Dota and the Dota logo are trademarks and/or registered trademarks of Valve Corporation. 2023 Valve Corporation, all rights reserved.
  </p>
  <p>Fan page by <span>Fareh Romero - 2023</span></p>
</section>
    `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
