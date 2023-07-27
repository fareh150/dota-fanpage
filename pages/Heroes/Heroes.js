import "./Heroes.css";

const template = () => {
  return `
        <section id="titlehero">
          <h2>check out the heroes</h2>
          <p>From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</p>
        </section>
      `;
};

const Heroes = () => {
  document.querySelector("main").innerHTML = template();
};

export default Heroes;
