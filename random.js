let randomURL =
  "https://api.giphy.com/v1/gifs/random?api_key=XwuuImabywP5lT5vtKVt3juk3WGbEjP0&tag=&rating=pg-13";

let randomSection = document.querySelector("footer");

function randomResults(e) {
  fetch(randomURL, {
    method: "GET",
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log("Random json Pull", json);
      displayRandomResults(json);
    });
}
randomResults();
randomResults;
let reload;

function randomReload() {
  reload = setInterval(randomResults, 10000);
}

randomReload();

function displayRandomResults(json) {
  while (randomSection.firstChild) {
    randomSection.removeChild(randomSection.firstChild);
  }
  let gifData3 = json.data;
  console.log("data", gifData3);
  let wrapper3 = document.createElement("div");
  let heading3 = document.createElement("h1");
  // let link = document.createElement('a');
  let img3 = document.createElement("img");
  let title3 = document.createElement("p");
  // let clearfix = document.createElement('div');
  console.log(gifData3.value);

  heading3.textContent = "Random";
  wrapper3.appendChild(heading3);
  wrapper3.appendChild(img3);
  wrapper3.appendChild(title3);
  randomSection.appendChild(wrapper3);
  let current3 = gifData3;
  console.log("current", current3);
  // article.appendChild(clearfix);
  img3.src = current3.image_url;
  img3.alt = current3.title;
  title3.textContent = current3.title;
}
