const cartValue=document.querySelector("#cartValue")

export const updateCart = (cartProducts)=>{
return (cartValue.innerHTML=`<i class="fa-solid fa-basket-shopping">${cartProducts.length}</i>`)
}

// i really wanna work but i cannot because my eyes hurt