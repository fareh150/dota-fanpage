import { heros } from "../data/heros";
import { heroprinter } from "./printhero";

const printHeroInPage = () => {
  for (const hero of heros) {
    heroprinter(hero);
  }
};

export default printHeroInPage;
