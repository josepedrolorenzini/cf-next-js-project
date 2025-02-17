"use server" ; 
async function addToCart(formData){
 
    console.log(formData.get('name'));
    console.log("add to cart")

}

 export default   addToCart