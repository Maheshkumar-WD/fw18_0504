import getNav from "../components/navbar/nav.js";
import { displayData } from "../components/appendSearchSuggestion.js";
// ### displaying navbar
// selection navbar element container
let navContainer = document.getElementById("navbar");
navContainer.innerHTML = getNav(); //setting nav bar
// --------------------------------------------------

// ### displaying search result
// selection search input field and value
let searchInput = document.querySelector(".search");
let searchResult = document.getElementById("searchResult");

// --------------------------------------------------
// fetching data with the help of search value

searchInput.addEventListener("input", function () {
  displayData(this.value);
});
