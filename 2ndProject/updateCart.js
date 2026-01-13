const cartValue=document.querySelector("#cartValue")
alert(cartValue,"value")
export const updateCart = (cartProducts)=>{
return (cartValue.innerHTML=`<i class="fa-solid fa-basket-shopping">${cartProducts.length}</i>`)
}

