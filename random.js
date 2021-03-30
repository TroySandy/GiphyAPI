let randomURL =
  "https://api.giphy.com/v1/gifs/random?api_key=XwuuImabywP5lT5vtKVt3juk3WGbEjP0&rating=pg";

let randomSection = document.getElementById("random");

function randomResults(e) {
  fetch(randomURL, {
    method: "GET",
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      displayRandomResults(json);
    });
}
randomResults();
let reload;

function randomReload() {
  reload = setInterval(randomResults, 3000);
}
randomReload();

function displayRandomResults(json) {
  while (randomSection.firstChild) {
    randomSection.removeChild(randomSection.firstChild);
  }

  let gifData3 = json.data;
  let img3 = document.createElement("img");
  let current3 = gifData3;
  randomSection.appendChild(img3);
  img3.src = current3.images.original.url;
  img3.alt = current3.title;
}
