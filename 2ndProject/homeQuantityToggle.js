export const homeQuantityToggle=(event,id,stock)=>{
  // this is to know which card i had clicked and know all the data of that card
const currentCardElement=document.querySelector(`#card${id}`)

// accesing the only productquentity data 
const productQuantity=currentCardElement.querySelector(".productQuantity")

// to work on the quantity 1 and getting the quantity


let quantity=parseInt(productQuantity.getAttribute('data-quantity'))|| 1;

if(event.target.className==="cartIncrement"){
  if(quantity<stock){
    quantity+=1;
  }
  else if(quantity===stock){
    quantity=stock;
  }
}

if(event.target.className==="cartDecrement"){
  if(quantity>1){
    quantity-=1;
  }
}
// now we have to set the updated value of quantity
productQuantity.innerText=quantity;
productQuantity.setAttribute('data-quantity',quantity)
return quantity;
  }
