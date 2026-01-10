const cartValue=document.getElementById("#cartValue")

export const updateCart = (cartProducts)=>{
return (cartValue.innerHTML=`<i class="fa-solid fa-basket-shopping">${cartProducts.length}</i>`)
}