const searchURL = "https://api.giphy.com/v1/gifs/search";
const apiKey = "XwuuImabywP5lT5vtKVt3juk3WGbEjP0";
let url;

const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchResults);
const section = document.querySelector("section");
// let offset = pagenumber * 25;
// let pageNumber = 0;

function searchResults(e) {
  e.preventDefault();
  url = `${searchURL}?api_key=${apiKey}&q=${searchTerm.value}&limit=25&offset=0&rating=pg&lang=en`;
  console.log("URL:", url);

  
  console.log("URL", url);
  fetch(url, {
    method: "GET",
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log("Search json Pull", json);
      displaySearchResults(json);
    });
}

function displaySearchResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  const gifData = json.data;
  console.log("gifData", gifData);
  // let clearfix = document.createElement('div');
  console.log(gifData.value);
  // if (gifData.length === 0) {
  //   // will return nothing if there are no articles
  //   console.log("No results");
  // } else {
  for (let x = 0; x < 25; x++) {
    let wrapper = document.createElement("div");
    let heading = document.createElement("h1");
    // let link = document.createElement('a');
    let img = document.createElement("img");
    let title = document.createElement("p");
    heading.textContent = "Results";
    wrapper.appendChild(heading);
    wrapper.appendChild(img);
    wrapper.appendChild(title);
    section.appendChild(wrapper);
    let current = gifData[x];
    console.log(current);
    // article.appendChild(clearfix);
    img.src = current.images.fixed_height_small.url;
    img.alt = current.title;
    title.textContent = current.title;
  }
}

  function nextPage(e) {
    console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
    }
//  fetchs the previous page of results
function previousPage(e) {
    console.log('Previous button clicked');
    if (pageNumber >= 0) {
        pageNumber--;
        // fetchResults(e);
    } else {

        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
  }
