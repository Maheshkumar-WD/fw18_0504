let btn = document.getElementById("confirm");
let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let name = form.name.value;
  let number = form.number.value;
  let address = form.address.value;
  if (name !== "" && number !== "" && address !== "") {
    form.reset();
    alert("Your order is accepted");
    setTimeout(function () {
      alert("Your order is being Prepared");
      setTimeout(function () {
        alert("Your order is being packed");
        setTimeout(function () {
          alert("Your order is out for delivery ");
          setTimeout(function () {
            alert("Order delivered");
          }, 12000);
        }, 10000);
      }, 8000);
    }, 3000);
  } else {
    alert("All fields are required!!!");
  }
});
