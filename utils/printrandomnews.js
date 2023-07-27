import { news } from "../data/news";
import { newsPrinterMain } from "./newsprinter";

const printNewsmain = () => {
  const randomnews = [];
  for (let i = 0; i < 3; i++) {
    randomnews.push(Math.floor(Math.random() * news.length));
  }
  console.log(randomnews);
  //let new1 = Math.floor(Math.random() * news.length);
  //let new2 = Math.floor(Math.random() * news.length);
  //let new3 = Math.floor(Math.random() * news.length);

  for (const i of randomnews) {
    newsPrinterMain(news[i]);
  }
};

export default printNewsmain;
