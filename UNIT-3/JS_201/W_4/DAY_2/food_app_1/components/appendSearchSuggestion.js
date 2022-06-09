let setTimer;
async function fetchData(v) {
  try {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${v}`;

    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function displayData(q) {
  if (setTimer) {
    searchResult.innerHTML = null;
    searchResult.style.display = "none";
    clearTimeout(setTimer);
  }
  searchResult.innerHTML = null;
  if (q.length > 0) {
    //checking input length - if it is greater than 0 display search result else make search result element to empty
    setTimer = setTimeout(async () => {
      searchResult.style.display = "block";
      let data = await fetchData(q);
      if (data.meals != null) {
        data.meals.forEach((meal) => {
          searchResult.innerHTML += `<p class="sRes">${meal.strMeal}</p>`;
        });
      } else {
        searchResult.innerHTML = `<p>${q}</p>`;
      }
    }, 500);
  } else {
    // if search boxx is empty - setting search result to null
    searchResult.innerHTML = null;
    searchResult.style.display = "none";
  }
}
export { setTimer, fetchData, displayData };
