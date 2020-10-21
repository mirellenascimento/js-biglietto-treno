var KM_PRICE = 0.21;
var DISCOUNT_UNDER = 0.20;
var DISCOUNT_OVER = 0.40;

var name;
var km;
var discount;
var carriageNumber = Math.floor(Math.random() * (12 - 1)) + 1;
var ticketCode = Math.floor(Math.random() * (100000 - 10000)) + 100000;


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
  var discount = document.getElementById("age").value;
  console.log(discount);



  document.getElementById("nome").innerHTML = name;


  if (discount == "under18"){
    document.getElementById("discountApplied").innerHTML = "Sconto Minorenne";
  } else if (discount == "over65"){
    document.getElementById("discountApplied").innerHTML = " Sconto Over 65";
  } else {
    document.getElementById("discountApplied").innerHTML = " Senza Sconto";
  }



  document.getElementById("carriage").innerHTML = carriageNumber;
  document.getElementById("codice").innerHTML = ticketCode;


 });
 // if (under){
 //   document.getElementById("siacountApplied").innerHTML = "Sconto Minnorene";
 // } else if (over){
 //   document.getElementById("siacountApplied").innerHTML = "Sconto Over 65";
 // } else {
 //   document.getElementById("siacountApplied").innerHTML = "Senza Sconto";
 // }




//
//
//  if (isNaN(km) {
//    alert("I numeri inseriti non sono validi");
//    console.log("I numeri non sono validi")
//  }
//  else {
//    if (under){
//      document.getElementById('finalPrice').innerHTML = underPrice.toFixed(2) + " €";
//      console.log(underPrice.toFixed(2) + " €");
//    }
//    else if (age > 64){
//      document.getElementById('price').innerHTML = priceOver65 + " €";
//      console.log(km * kmPrice * discountOver65 + " €");
//    }
//    else{
//      document.getElementById('price').innerHTML = normalPrice + " €";
//      console.log(normalPrice + " €");
//    }
//  }
//
//
//  var formulaUnder18 = km * kmPrice * discountUnder18;
//  priceUnder18 = formulaUnder18.;
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
