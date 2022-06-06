let purchases = JSON.parse(localStorage.getItem("purchase"));
let user = JSON.parse(localStorage.getItem("user"));
let wB = document.getElementById("wallet_balance");
let bal = document.getElementById("balance");
let wbA = 0;
wB.innerText = user._amt;

let allPurchases = document.getElementById("purchased_vouchers");

function displayVouchers() {
  purchases.forEach(function (p) {
    let voucher = document.createElement("div");
    voucher.classList.add("voucher");
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");

    let img = document.createElement("img");
    img.src = p.image;
    imgDiv.append(img);

    let name = document.createElement("p");
    name.innerText = p.name;

    let price = document.createElement("p");
    price.innerText = p.price;

    voucher.append(imgDiv, name, price);
    allPurchases.append(voucher);
  });
  bal.innerText = user._amt;
  wB.innerText = user._amt;
}
displayVouchers();
