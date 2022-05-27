function Product (name,category,imageurl,price,gender){
     this.name = name;
     this.category = category;
     this.image = imageurl;
     this.price = price;
     this.gender = gender;
     this.sold = false;
}

let form = document.querySelector("#form");
form.setAttribute("autocomplete","off");

form.addEventListener("submit",function(){
     event.preventDefault();

     let products = JSON.parse(localStorage.getItem('products')) || [];
     let n = this.name.value;
     let c = this.category.value;
     let img = this.image.value;
     let p = this.price.value;
     let g = this.gender.value;
     console.log(n);
     let product = new Product(n,c,img,p,g);
     products.push(product);
     console.log(products);
     localStorage.setItem('products',JSON.stringify(products));

})
