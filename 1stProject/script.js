function loadProduct(){
fetch('https://fakestoreapi.com/products')
.then ((res)=>res.json())
.then ((data)=>{
  const box=document.getElementById('product')
  data.forEach((item)=>{
    box.innerHTML+=`<a href="#${item.id}"><div class="products">
    <img class="product-image" src="${item.image}"/>
    <div class="product-title">${item.title}</div>
    <div class="product-price">${item.price}</div>
    </div></a>
    `
  })
})
}


function loadProductDetail(id){
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then ((res)=>res.json())
  .then ((data)=>{
  document.getElementById('productDetail').innerHTML+=`
  <button onclick="goback()"class="back-btn">Back</button>
  <div class="detail">
    <img src="${data.image}" class="detail-img">
    <div class="detail-info">
    <h2>${data.title}</h2>
    <p><strong>Price:</strong>$${data.price}</p>
    <p>${data.description}</p>
    </div>
    </div>
    `
    document.getElementById("product").style.display="none"
    document.getElementById('productDetail').style.display="block"
  })
}

function goback(){
  location.hash="";
  // document.getElementById("product").style.display="block"
  //   document.getElementById('productDetail').style.display="none"
    window.location.reload()
}

window.addEventListener("hashchange",()=>{
  const id=location.hash.replace("#","")
  if(id)loadProductDetail(id);
  else goback();
});

loadProduct();
  loadProductDetail()


