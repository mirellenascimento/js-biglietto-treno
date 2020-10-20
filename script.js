var km = prompt ("Per calcolare il prezzo del tuo viaggio, rispondi alle domande:\nQuanti chilometri vuoi percorrere?");
console.log(km)
var age = prompt ("Quanti anni hai?");
console.log(age)


var kmPrice = 0.21;

var discountUnder18 = 0.80;
var formulaUnder18 = km * kmPrice * discountUnder18;
priceUnder18 = formulaUnder18.toFixed(2);

var discountOver65 = 0.60;
var formulaOver65 = km * kmPrice * discountOver65;
priceOver65 = formulaOver65.toFixed(2);

var noDiscount = km * kmPrice;
normalPrice = noDiscount.toFixed(2);


if (isNaN(km) || isNaN(age)){
  alert("I numeri inseriti non sono validi");
  console.log("I numeri non sono validi")
}
else {
  if (age < 18){
    document.getElementById('price').innerHTML = priceUnder18 + " €";
    console.log( priceUnder18 + " €");
  }
  else if (age > 64){
    document.getElementById('price').innerHTML = priceOver65 + " €";
    console.log(km * kmPrice * discountOver65 + " €");
  }
  else{
    document.getElementById('price').innerHTML = normalPrice + " €";
    console.log(normalPrice + " €");
  }
}
