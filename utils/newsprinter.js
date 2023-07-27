export const newsPrinterMain = (objeto) => {
  const randomnews = document.querySelector("#randomnews");
  randomnews.innerHTML += `
    <div class="fondonew" style="
              background-image: url('${objeto.img}');
            ">
            <section
            class="randomnewsclass">
                <p class="datenews">${objeto.date}</p>
                <h2 class="titlenews">${objeto.title}</h2>
                <p class="datanews">${objeto.info}</p>
            </section>
    </div>
    `;
  console.log(objeto);
};
