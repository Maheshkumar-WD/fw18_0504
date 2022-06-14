let search = document.getElementById("search");
let cards = document.getElementById("cards");

search.addEventListener("input", fetchData);

function fetchData() {
  q = this.value.split(" ").join("+");

  url = `
  https://api.themoviedb.org/3/search/movie?api_key=e641ff31e2d9e9c3040eb5e0553c46cf&query=${q}`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      cards.style.display = "grid";
      console.log(data);
      if (data.total_results > 0) {
        cards.innerHTML = null;
        data.results.forEach(function (movie) {
          console.log(movie);
          // movie = m.results;
          let card = document.createElement("div");

          card.classList.add("card");
          let html = `<div class="imgDiv">
                                   <img src=${
                                     movie.poster_path != null
                                       ? "https://image.tmdb.org/t/p/w500" +
                                         movie.poster_path
                                       : "https://isocarp.org/app/uploads/2014/05/noimage.jpg"
                                   }>
                              </div>
                              <h3>${movie.title}</h3>
                              <p>${movie.release_date}</p>
                              `;
          card.innerHTML = html;
          cards.append(card);
          if (movie.vote_average > 8.5) {
            console.log("above");
            let recTag = document.createElement("p");
            recTag.classList.add("recTag");
            recTag.innerText = "Recommended";
            card.append(recTag);
          }
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
