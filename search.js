const searchURL = "https://api.giphy.com/v1/gifs/search";
const apiKey = "XwuuImabywP5lT5vtKVt3juk3WGbEjP0";
let url;

const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchResults);
const section = document.getElementById("results");

function searchResults(e) {
  e.preventDefault();
  url = `${searchURL}?api_key=${apiKey}&q=${searchTerm.value}&limit=25&offset=0&lang=en`;
  fetch(url, {
    method: "GET",
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      displaySearchResults(json);
    });

    let searchField = document.getElementById('search');
    searchField.value = ''
}

function displaySearchResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const gifData = json.data;

  for (let x = 0; x < 25; x++) {
    let wrapper = document.createElement("div");
    let card = document.createElement("div");
    let title = document.createElement("h6");
    let dpDown = document.createElement("div");
    let btn = document.createElement("button");
    list = document.createElement("div");
    smDown = document.createElement("a");
    orgDown = document.createElement("a");
    lgDown = document.createElement("a");
    let img = document.createElement("img");
    wrapper.appendChild(img);
    wrapper.appendChild(card);
    card.appendChild(title);
    card.appendChild(dpDown);
    dpDown.appendChild(btn);
    dpDown.appendChild(list);
    list.appendChild(smDown);
    list.appendChild(orgDown);
    list.appendChild(lgDown);
    section.appendChild(wrapper);
    let current = gifData[x];
    console.log("current", current);
    img.src = current.images.fixed_height_small.url;
    img.alt = current.title;
    title.textContent = current.title;
    smDown.href = current.images.fixed_height_small.url;
    smDown.target = "_blank";
    orgDown.href = current.images.original.url;
    orgDown.target = "_blank";
    lgDown.href = current.images.original_mp4.mp4;
    lgDown.target = "_blank";
    lgDown.classList.add("dropdown-item");
    lgDown.textContent = "HD MP4";
    orgDown.classList.add("dropdown-item");
    orgDown.textContent = "Original size";
    smDown.classList.add("dropdown-item");
    smDown.textContent = "Small size";
    list.classList.add("dropdown-menu");
    btn.classList.add("btn");
    btn.classList.add("btn-outline-info");
    btn.classList.add("dropdown-toggle");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "dropdownMenuButton1");
    btn.setAttribute("data-bs-toggle", "dropdown");
    btn.setAttribute("aria-expanded", "false");
    dpDown.classList.add("dropdown");
    title.classList.add("card-title");
    card.classList.add("card-body");
    wrapper.classList.add("card");
  }

  if (gifData !== "") {
    section.style.display = "grid";
  } else {
    section.style.display = "none";
  }
}

function scrollDown() {
  document.getElementById("navbar").scrollIntoView();
}
