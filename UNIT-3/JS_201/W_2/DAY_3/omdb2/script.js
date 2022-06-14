let search = document.getElementById("search");
let cards = document.getElementById("cards");

search.addEventListener("input", fetchData);

function fetchData() {
  s = this.value;
  url = `https://www.omdbapi.com/?s=${s}&apikey=c8e975de`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      cards.style.display = "grid";
      console.log(data);
      if (data.Response == "True") {
        cards.innerHTML = null;
        data.Search.forEach(function (movie) {
          let card = document.createElement("div");

          card.classList.add("card");
          let html = `<div class="imgDiv">
                                   <img src=${
                                     movie.Poster != "N/A"
                                       ? movie.Poster
                                       : "https://isocarp.org/app/uploads/2014/05/noimage.jpg"
                                   }>
                              </div>
                              <h3>${movie.Title}</h3>
                              <p>${movie.Year}</p>
                              `;
          card.innerHTML = html;
          cards.append(card);
        });
      } else {
        cards.innerHTML = null;

        cards.style.display = "block";
        cards.style.textAlign = "center";
        cards.innerHTML =
          "<img class='noresultImg' src='https://i.pinimg.com/originals/20/d3/8b/20d38b1d0d3304dd80adc2e4029278ac.png'>";
      }
      if (search.value.length == 0) {
        cards.style.display = "none";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function card(el) {}
