let playVideo = document.getElementById("playVideo");
let v = JSON.parse(localStorage.getItem("currVideo"));
let play = (v) => {
  cards.innerHTML = null; // cards is declared in index.js
  let url = `https://www.youtube.com/embed/${v.id.videoId}`;
  playVideo.innerHTML = `
    <iframe
      width="560"
      height="315"
      src= ${url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
  cards.append(playVideo);
};
play(v);
