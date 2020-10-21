var KM_PRICE = 0.21;
var DISCOUNT_UNDER = 0.20;
var DISCOUNT_OVER = 0.40;

var fullPrice = km * KM_PRICE;
var underPrice = fullPrice -= fullPrice * DISCOUNT_UNDER;
var overPrice = fullPrice -= fullPrice * DISCOUNT_OVER;



var generateButton = document.getElementById("genera");
var cleanButton = document.getElementById("annulla");


// Buttons Action

generateButton.addEventListener("click", function(){
  // var visitatore;
  var name = document.getElementById("nomeECognome").value;
  console.log(name);
  var km = document.getElementById("kmDaPercorrere").value;
  console.log(km);
  var under = document.getElementById("under18").checked;
  console.log(under);
  var adult = document.getElementById("adult18-64").checked;
  console.log(adult);
  var over = document.getElementById("over65").checked;
  console.log(over);
 });




 var formulaUnder18 = km * kmPrice * discountUnder18;
 priceUnder18 = formulaUnder18.toFixed(2);


//
//
//
// var formulaUnder18 = km * kmPrice * discountUnder18;
// priceUnder18 = formulaUnder18.toFixed(2);
//
// var formulaOver65 = km * kmPrice * discountOver65;
// priceOver65 = formulaOver65.toFixed(2);
//
// var noDiscount = km * kmPrice;
// normalPrice = noDiscount.toFixed(2);
//
//
// if (isNaN(km) || isNaN(age)){
//   alert("I numeri inseriti non sono validi");
//   console.log("I numeri non sono validi")
// }
// else {
//   if (age < 18){
//     document.getElementById('price').innerHTML = priceUnder18 + " €";
//     console.log( priceUnder18 + " €");
//   }
//   else if (age > 64){
//     document.getElementById('price').innerHTML = priceOver65 + " €";
//     console.log(km * kmPrice * discountOver65 + " €");
//   }
//   else{
//     document.getElementById('price').innerHTML = normalPrice + " €";
//     console.log(normalPrice + " €");
//   }
// }
