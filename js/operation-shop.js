var numberCart = 0;
var spanNumberCart = document.getElementById("numberCart");
let reference = document.getElementById("reference");
reference.value = "bite_fashion_" +new Date().getTime();
let totalSell = 0;

/**
 * Agrega un nuevo producto al carrito
 */
function addProduct(){
    numberCart += 1;
    spanNumberCart.innerHTML = numberCart;
    alert("Producto agregado al carrito");
}

/**
 * Cambia la cantidad que se va a comprar de un producto determinado
 * @param {identification} identification 
 */
function changeQuantity(identification){
    let price = parseInt(document.getElementById("price"+identification).innerHTML);
    let subtotal = document.getElementById("subtotal"+identification);
    let cant = parseInt(document.getElementById("cant"+identification).value);
    subtotal.innerHTML = price * cant;
    
    calculateCant();
    calculateTotal();
    reference.value = "bite_fashion_" +new Date().getTime();
}

/**
 * Calcula la cantidad total de artículos que se van a comprar
 */
function calculateCant(){
    let cant = 0;
    let totalCant = document.getElementById("totalCant");
    let quantity = document.getElementsByName("quantity");
    for (const quant of quantity) {
        cant += parseInt(quant.value);
    }
    totalCant.innerHTML = cant;
}

/**
 * Calcula el valor total de la compra
 */
function calculateTotal(){
    totalSell = 0;
    let subtotals = document.getElementsByClassName("cart-subtotal");
    let total = document.getElementById("total");
    let totalPay = document.getElementById("totalPay");

    for (const subtotal of subtotals) {
        totalSell += parseInt(subtotal.innerHTML);
    }
    total.innerHTML = totalSell;
    totalPay.value = totalSell*100;
}