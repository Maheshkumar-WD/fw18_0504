// Add the coffee to local storage with key "coffee"
const url = "https://masai-mock-api.herokuapp.com/coffee/menu";
let menu = document.getElementById("menu");
async function fetchData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    displayCard(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();

function displayCard(data) {
  res = data.menu.data;
  let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
  let count = document.getElementById("coffee_count");
  count.innerText = coffee.length;

  res.forEach(function (el) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    let img = document.createElement("img");
    img.src = el.image;
    imgDiv.append(img);

    let type = document.createElement("p");
    type.innerText = el.title;

    let price = document.createElement("p");
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Add to Bucket";
    btn.setAttribute("id", "add_to_bucket");
    btn.addEventListener("click", function () {
      coffee.push(el);
      localStorage.setItem("coffee", JSON.stringify(coffee));

      let bucketCount = JSON.parse(localStorage.getItem("coffee")) || [];
      if (bucketCount.length == 0) {
        count.innerText = 0;
      } else {
        count.innerText = bucketCount.length;
      }
    });

    card.append(imgDiv, type, price, btn);
    menu.append(card);
  });
}
