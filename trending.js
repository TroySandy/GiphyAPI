const trendingURL =
  "https://api.giphy.com/v1/gifs/trending?api_key=XwuuImabywP5lT5vtKVt3juk3WGbEjP0&limit=25&rating=pg-13";

const trendingSection = document.getElementById("first");

function trendingResults(e) {
  fetch(trendingURL, {
    method: "GET",
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log("Trending json pull", json);
      displayTrendingResults(json);
    });
}

trendingResults();

function displayTrendingResults(json) {
  const gifData2 = json.data;
  console.log("data", gifData2);
  console.log("value", gifData2.length);

  if (gifData2.length === 0) {
    // will return nothing if there are no articles
    console.log("No results");
  } else {
    for (let y = 0; y < 5; y++) {
      let wrapper2 = document.createElement("div");
      // wrapper2.classList.add("");
      let card2 = document.createElement("div");
      // card2.classList('');
      let title2 = document.createElement("p");
      // title2.classList('');
      let dpDown2 = document.createElement("div");
      // dpDown2.classList('');
      let btn2 = document.createElement("button");
      // btn2.classList('');
      list2 = document.createElement("ul");
      listItemA = document.createElement('li');
      listItemB = document.createElement('li')
      listItemC = document.createElement('li')
      smDown2 = document.createElement('a')
      orgDown2 = document.createElement('a')
      lgDown2 = document.createElement('a')
      //   let heading2 = document.createElement("h1");
      let link = document.createElement("a");
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
      list2.appendChild(listItemA);
      listItemA.appendChild(smDown2);
      list2.appendChild(listItemB);
      listItemB.appendChild(orgDown2);
      list2.appendChild(listItemC);
      listItemC.appendChild(lgDown2);
      trendingSection.appendChild(wrapper2);
      let current2 = gifData2[y];
      console.log("current2", current2);
      // article.appendChild(clearfix);
      img2.src = current2.images.fixed_height.url;
      img2.alt = current2.title;
      title2.textContent = current2.title;
      btn2.textContent = "Downloads";

    }
  }
}
