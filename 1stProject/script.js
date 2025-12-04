
fetch('https://fakestoreapi.com/products')
.then ((res)=>res.json())
.then ((data)=>{
  const box=document.getElementById('product')
  data.forEach((item)=>{
    box.innerHTML+=`<div class="products">
    <img src="${item.image}"/>
    <div class="product-title">${item.title}</div>
    <div class="product-price">${item.price}</div>
    </div>`
  })
})