const menuFunction = () => {
  document.querySelector("#menu").addEventListener("click", () => {
    const links = document.querySelector("#links");
    links.classList.toggle("mactive");

    const lista = document.querySelector("#lista");
    lista.classList.toggle("ulactive");

    const li = lista.querySelectorAll("li");
    for (const linea of li) {
      linea.classList.toggle("liactive");
    }
  });
};

export default menuFunction;
