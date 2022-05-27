let products = JSON.parse(localStorage.getItem("products"));

displayProducts();
function displayProducts(){
     
     let Allproducts = document.querySelector("#all_products");
     Allproducts.innerHTML = null;
     products.forEach(function(pro,i){
          div = document.createElement("div");
          div.setAttribute("id","product");
          imgDiv = document.createElement("div");
          imgDiv.classList.add("img");
          img = document.createElement("img");
          img.setAttribute("src",pro.image);
          imgDiv.append(img);
          textDiv = document.createElement("div");
          textDiv.classList.add("text_container");
          typeP = document.createElement("p");
          typeP.classList.add("type");
          typeP.innerText = pro.type;
          descP = document.createElement("p");
          descP.classList.add("desc")
          descP.innerText = pro.desc;
          priceP = document.createElement("p");
          priceP.classList.add("price");
          priceP.innerText = pro.price;
          removeBtn = document.createElement("button");
          removeBtn.setAttribute("id","remove_product");
          removeBtn.innerText = "Remove";
          textDiv.append(typeP,descP,priceP,removeBtn);
          div.append(imgDiv,textDiv);
          Allproducts.append(div);
          removeBtn.addEventListener("click",function(){
               removeProduct(i);
               window.location.reload();
          })

     
    })
}
function removeProduct(i){
     
     let products = JSON.parse(localStorage.getItem("products"));
     products.splice(i,1);
     localStorage.setItem("products",JSON.stringify(products));
}
displayProducts();
addMoreProduct = document.querySelector("#add_more_product");
addMoreProduct.addEventListener("click",function(){
     window.location = "index.html";
})