let randomURL =
  "https://api.giphy.com/v1/gifs/random?api_key=XwuuImabywP5lT5vtKVt3juk3WGbEjP0";

let randomSection = document.getElementById("random");

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
let reload;

function randomReload() {
  reload = setInterval(randomResults, 20000);
}
randomReload();

function displayRandomResults(json) {
  while (randomSection.firstChild) {
    randomSection.removeChild(randomSection.firstChild);
  }
  let gifData3 = json.data;
  let wrapper3 = document.createElement("div");
  // wrapper3.setAttribute('width', '130' )
  let card3 = document.createElement("div");
  let title3 = document.createElement("h6");
  let dpDown3 = document.createElement("div");
  let btn3 = document.createElement("button");
  list3 = document.createElement("div");
  // <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
  // <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  smDown3 = document.createElement("a");
  // <a class="dropdown-item" href="#">
  orgDown3 = document.createElement("a");
  lgDown3 = document.createElement("a");
  //   let heading3 = document.createElement("h1");
  let img3 = document.createElement("img");
  // class="card-img-top"
  // let clearfix = document.createElement('div');
  //   heading3.textContent = "Currently Trending";
  //   wrapper3.appendChild(heading3);
  wrapper3.appendChild(img3);
  wrapper3.appendChild(card3);
  card3.appendChild(title3);
  card3.appendChild(dpDown3);
  dpDown3.appendChild(btn3);
  dpDown3.appendChild(list3);
  list3.appendChild(smDown3);
  list3.appendChild(orgDown3);
  list3.appendChild(lgDown3);
  randomSection.appendChild(wrapper3);
  let current3 = gifData3;
  console.log("current3", current3);
  // article.appendChild(clearfix);
  img3.src = current3.images.fixed_height_small.url;
  img3.alt = current3.title;
  title3.textContent = current3.title;
  btn3.textContent = "Downloads";
  smDown3.href = current3.images.fixed_height_small.url;
  smDown3.target = "_blank";
  orgDown3.href = current3.images.original.url;
  orgDown3.target = "_blank";
  lgDown3.href = current3.images.original_mp4.mp4;
  lgDown3.target = "_blank";
  lgDown3.classList.add("dropdown-item");
  lgDown3.textContent = "HD MP4";
  orgDown3.classList.add("dropdown-item");
  orgDown3.textContent = "Original size";
  smDown3.classList.add("dropdown-item");
  smDown3.textContent = "Small size";
  list3.classList.add("dropdown-menu");
  btn3.classList.add("btn");
  btn3.classList.add("btn-secondary");
  btn3.classList.add("dropdown-toggle");
  btn3.setAttribute("type", "button");
  btn3.setAttribute("id", "dropdownMenuButton1");
  btn3.setAttribute("data-bs-toggle", "dropdown");
  btn3.setAttribute("aria-expanded", "false");
  dpDown3.classList.add("dropdown");
  title3.classList.add("card-title");
  card3.classList.add("card-body");
  wrapper3.classList.add("card");

  if (gifData3 !== "") {
    randomSection.style.visibility = "visible";
  } else {
    randomSection.style.visibility = "hidden";
  }
}
