let allVouchers = document.getElementById("voucher_list");
let wallet_balance = document.getElementById("wallet_balance");
let user = JSON.parse(localStorage.getItem("user"));
if (user) {
  wallet_balance.innerText = user._amt;
  let purchases = JSON.parse(localStorage.getItem("purchase")) || [];

  async function getVouchers() {
    url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

    let data = await fetch(url);
    let res = await data.json();

    res[0].vouchers.forEach(function (v, i) {
      let voucher = document.createElement("div");
      voucher.classList.add("voucher");

      let imgDiv = document.createElement("div");
      imgDiv.classList.add("imgDiv");

      let img = document.createElement("img");
      img.src = v.image;
      imgDiv.append(img);

      let name = document.createElement("p");
      name.classList.add("name");
      name.innerText = v.name;

      let price = document.createElement("p");
      price.classList.add("price");
      price.innerText = v.price;

      let btn = document.createElement("button");
      btn.innerText = "Buy Voucher";
      btn.classList.add("buy_voucher");

      btn.addEventListener("click", function () {
        if (user._amt > v.price) {
          alert("Hurray! purchase successful");
          purchases.push(v);
          localStorage.setItem("purchase", JSON.stringify(purchases));
          amt = 0;
          amt += v.price;
          user._amt -= amt;
          wallet_balance.innerText = user._amt;
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          alert("Sorry! insufficient balance");
        }
      });
      voucher.append(imgDiv, name, price, btn);
      allVouchers.append(voucher);
    });
  }

  getVouchers();
} else {
  window.location = "index.html";
}
