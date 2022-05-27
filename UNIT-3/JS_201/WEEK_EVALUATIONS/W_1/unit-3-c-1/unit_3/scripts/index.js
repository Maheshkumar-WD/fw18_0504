//store the products array in localstorage as "products"

let form = document.querySelector("#products");

function Product(t,d,p,i){
     this.type = t;
     this.desc = d;
     this.price = p;
     this.image = i;
}

form.addEventListener("submit",addProduct);

function addProduct(){
     event.preventDefault();
     let products  = JSON.parse(localStorage.getItem("products")) || [];
     let t = form.type.value;
     let d = form.desc.value;
     let p = form.price.value;
     let i = form.image.value;

     let product = new Product(t,d,p,i);
     products.push(product);
     localStorage.setItem("products",JSON.stringify(products));
     form.reset(); 
}
let showProducts = document.querySelector("#show_products");

showProducts.addEventListener("click",function(){
     window.location = "inventory.html";
})