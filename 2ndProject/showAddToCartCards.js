import products from "./api/products.json";
import { getcartProductFromls } from "./getCartProducts";


let cartProducts=getcartProductFromls();

let filterProducts=products.filter((curProd)=>{
console.log(curProd.id)
})