// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
let bucket = document.getElementById("bucket");
let total_amt = document.getElementById("total_amount");
if (coffee.length == 0) {
}
{
  displayCards();
}

function displayCards() {
  bucket.innerHTML = null;
  let totalAmt = 0;
  console.log(coffee);
  coffee.forEach(function (el, i) {
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
    totalAmt += el.price;
    total_amt.innerText = totalAmt;

    let remBtn = document.createElement("button");
    remBtn.setAttribute("id", "remove_coffee");
    remBtn.innerText = "Remove";
    remBtn.addEventListener("click", function () {
      coffee.splice(i, 1);
      localStorage.setItem("coffee", JSON.stringify(coffee));
      displayCards();
    });
    let checkout = document.createElement("button");
    checkout.innerText = "Checkout";
    checkout.setAttribute("id", "confirm_checkout");

    checkout.addEventListener("click", function () {
      window.location = "checkout.html";
    });

    card.append(imgDiv, type, price, remBtn, checkout);
    bucket.append(card);
  });
}
