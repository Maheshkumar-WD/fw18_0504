let q = document.getElementById("search");
let search = document.getElementById("searchBtn");
const api_key = "AIzaSyC8X0p8EuudayI_-XwPwkq-eav_A9-E7Q4";
let cards = document.getElementById("cards");

let loadDefault = async () => {
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=In&key=${api_key}`;

  let response = await fetch(url);
  let data = await response.json();
  displayData(data.items);
};
loadDefault();

let fetchData = async () => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q.value}&key=${api_key}`;
  let response = await fetch(url);
  let data = await response.json();
  displayData(data.items);
};

let displayData = (data) => {
  let v = document.getElementById("playVideo");
  if (v) {
    v.innerHTML = null;
  }
  cards.innerHTML = null;
  console.log(data);
  data.forEach((el, i) => {
    let card = document.createElement("div");
    card.classList.add("card");

    tumbNailDiv = document.createElement("div");
    tumbNailDiv.classList.add("tumbNailDiv");
    img = document.createElement("img");
    img.classList.add("thumbnails");
    img.src = el.snippet.thumbnails.high.url;

    tumbNailDiv.append(img);

    text_container = document.createElement("div");
    text_container.classList.add("testmonial");

    let p = document.createElement("p");
    p.innerText = el.snippet.title.slice(0, 50) + "...";

    let channelName = document.createElement("p");
    channelName.classList.add("channelName");
    channelName.innerText = el.snippet.channelTitle;
    text_container.append(p, channelName);
    card.append(tumbNailDiv, text_container);
    cards.append(card);
    card.addEventListener("click", () => {
      currVideo = data[i];
      localStorage.setItem("currVideo", JSON.stringify(currVideo));
      window.location = "play.html";
    });
  });
};

search.addEventListener("click", fetchData);
