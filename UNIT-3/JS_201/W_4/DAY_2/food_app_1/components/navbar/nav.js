let getNav = () => {
  return `
     <h1 id="logo">Food App</h1>
     <div id="searchBox-group">
          <input type="text" placeholder="Eg:- Dry Mushroom " class="search">
          <button class="searchBtn">Search</button>
          <div id="searchResult"></div>
     </div>
     <div id="navlinks">
          <a href="index.html" class="link">Home</a>
          <a href="recipies.html" class="link">Recipies</a>
          <a href="login.html" class="link login">Login</a>
     </div>
     `;
};

export default getNav;
