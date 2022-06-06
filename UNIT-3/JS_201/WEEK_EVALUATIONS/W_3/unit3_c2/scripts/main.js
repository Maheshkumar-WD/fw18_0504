let form = document.getElementById("form");

class User {
  constructor(n, em, a, amt) {
    this.name = n;
    this.email = em;
    this.address = a;
    this._amt = amt;
  }
}

form.addEventListener("submit", submitData);

function submitData(e) {
  e.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  let address = form.address.value;
  let wallet = form.amount.value;
  let user = new User(name, email, address, wallet);
  form.reset();

  localStorage.setItem("user", JSON.stringify(user));
}
