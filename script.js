var km = prompt ("Per calcolare il prezzo del tuo viaggio, rispondi alle domande:\nQuanti chilometri voui percorrere?");
console.log(km)
var age = prompt ("Quanti anni hai?");
console.log(age)

var kmPrice = 0.21;
var discountUnder18 = 0.80;
var discountOver65 = 0.60;


if (isNaN(km) || isNaN(age)){
  alert("I numeri inseriti non sono validi");
  console.log("I numeri non sono validi")
}
else {
  if (age < 18){
    document.getElementById('price').innerHTML = km * kmPrice * discountUnder18 + " €";
    console.log(km * kmPrice * discountUnder18 + " €");
  }
  else if (age > 64){
    document.getElementById('price').innerHTML = km * kmPrice * discountOver65 + " €";
    console.log(km * kmPrice * discountOver65 + " €");
  }
  else{
    document.getElementById('price').innerHTML = km * kmPrice + " €";
    console.log(km * kmPrice + " €");
  }

}
