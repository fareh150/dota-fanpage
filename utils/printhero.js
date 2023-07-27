import { heros } from "../data/heros";

export const heroprinter = (objeto) => {
  const herosbox = document.querySelector("#herosbox");
  herosbox.innerHTML += `
        <div class="herobox" style="
        background-image: url('${objeto.image}');">
            <article>
                <img src="${objeto.attribute_img}" alt="logo attribute">
                <p>${objeto.name_loc}</p>
            </article>
        </div>
      `;
  console.log(objeto);
};
