const trendingURL =
  "https://api.giphy.com/v1/gifs/trending?api_key=XwuuImabywP5lT5vtKVt3juk3WGbEjP0&limit=25";

const trendingSection = document.getElementById("trending");

function trendingResults(e) {
  fetch(trendingURL, {
    method: "GET",
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      displayTrendingResults(json);
    });
}

trendingResults();

function displayTrendingResults(json) {
  const gifData2 = json.data;

  if (gifData2.length === 0) {
  } else {
    for (let y = 0; y < 20; y++) {
      let wrapper2 = document.createElement("div");
      let card2 = document.createElement("div");
      let title2 = document.createElement("h6");
      let dpDown2 = document.createElement("div");
      let btn2 = document.createElement("button");
      list2 = document.createElement("div");
         smDown2 = document.createElement("a");
        orgDown2 = document.createElement("a");
      lgDown2 = document.createElement("a");
      //   let heading2 = document.createElement("h1");
      let img2 = document.createElement("img");
      // let clearfix = document.createElement('div');
      //   heading2.textContent = "Currently Trending";
      //   wrapper2.appendChild(heading2);
      wrapper2.appendChild(img2);
      wrapper2.appendChild(card2);
      card2.appendChild(title2);
      card2.appendChild(dpDown2);
      dpDown2.appendChild(btn2);
      dpDown2.appendChild(list2);
      list2.appendChild(smDown2);
      list2.appendChild(orgDown2);
      list2.appendChild(lgDown2);
      trendingSection.appendChild(wrapper2);
      let current2 = gifData2[y];
      console.log("current2", current2);
      // article.appendChild(clearfix);
      img2.src = current2.images.preview_gif.url;
      img2.alt = current2.title;
      title2.textContent = current2.title;
      btn2.textContent = "Downloads";
      smDown2.href = current2.images.fixed_height_small.url;
      smDown2.target = "_blank";
      orgDown2.href = current2.images.original.url;
      orgDown2.target = "_blank";
      lgDown2.href = current2.images.original_mp4.mp4;
      lgDown2.target = "_blank";
      lgDown2.classList.add("dropdown-item");
      lgDown2.textContent = "HD MP4";
      orgDown2.classList.add("dropdown-item");
      orgDown2.textContent = "Original size";
      smDown2.classList.add("dropdown-item");
      smDown2.textContent = "Small size";
      list2.classList.add("dropdown-menu");
      btn2.classList.add("btn");
      btn2.classList.add("btn-secondary");
      btn2.classList.add("dropdown-toggle");
      btn2.setAttribute("type", "button");
      btn2.setAttribute("id", "dropdownMenuButton1");
      btn2.setAttribute("data-bs-toggle", "dropdown");
      btn2.setAttribute("aria-expanded", "false");
      dpDown2.classList.add("dropdown");
      title2.classList.add("card-title");
      card2.classList.add("card-body");
      wrapper2.classList.add("card");
    }
  }

  if (gifData2 !== "") {
    trendingSection.style.visibility = "visible";
  } else {
    trendingSection.style.visibility = "hidden";
  }
}
