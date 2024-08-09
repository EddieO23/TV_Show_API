// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

// const jokes = document.querySelector("#jokes");
// const button = document.querySelector("button");

// const addNewJoke = async () => {
//   const jokeText = await getDadJoke();
//   const newLI = document.createElement("LI");
//   newLI.append(jokeText);
//   jokes.append(newLI);
// };

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     return res.data.joke;
//   } catch (e) {
//     return "No jokes available sorry";
//   }
// };
// button.addEventListener("click", addNewJoke);

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const config = { params: { q: userInput, isFunny: 'Ocampo' } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
