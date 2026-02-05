export function showToast(operation,id){
  const toast = document.createElement("div")
  toast.classList.add("toast")
// set the text content of the toast based on the operation
if(operation==="add"){
  toast.textContent=`product with id ${id}had been added`
}
else{
  toast.textContent = `product with id ${id}has been deleted`;
}
  document.body.appendChild(toast);

  // automatically remove the toast after a few second
  setTimeout(()=>{
    
  })
}