const cartValue=document.getElementById("#cartValue")

export const updateCart = (cartProducts)=>{
return (cartValue.innerHTML=`<i class="fa-solid fa-basket-shopping">${cartProducts.length}</i>`)
}
// This is not working so i could not do it today i will ask my teacher for it
