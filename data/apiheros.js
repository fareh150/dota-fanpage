const url = "https://dota2-heroes.p.rapidapi.com/heroes/english";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dc87fb4790msh054c11c10546c6fp128bc3jsna74e967677fc",
    "X-RapidAPI-Host": "dota2-heroes.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

//poner este codigo donde lo necesite y usar como array nuevo result
