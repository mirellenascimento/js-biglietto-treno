// Fixed values
var KM_PRICE = 0.21;
var DISCOUNT_UNDER = 0.20;
var DISCOUNT_OVER = 0.40;

// Variables
var name;
var km;
var discount;
var carriageNumber = Math.floor(Math.random() * (12 - 1)) + 1;
var ticketCode = Math.floor(Math.random() * (1000000 - 100000)) + 100000;


// Buttons
var generateButton = document.getElementById("genera");
var cleanButton = document.getElementById("annulla");


// Button GENERA Action


generateButton.addEventListener("click", function(){
// imput data
  var name = document.getElementById("nomeECognome").value;
  console.log(name);
  var km = document.getElementById("kmDaPercorrere").value;
  console.log(km);
  var discount = document.getElementById("age").value;
  console.log(discount);

// prices
  var fullPrice = parseInt(km) * KM_PRICE;
  var underPrice = fullPrice -= fullPrice * DISCOUNT_UNDER;
  var overPrice = fullPrice -= fullPrice * DISCOUNT_OVER;

// ouput data
// General
  document.getElementById("nome").innerHTML = name;
  document.getElementById("carriage").innerHTML = carriageNumber;
  document.getElementById("codice").innerHTML = ticketCode;


// Discount and Price
  if (isNaN(fullPrice)){
    alert("Non hai inserito i valori!");
    document.getElementById("outputText").style.display = "none";
    document.getElementById("outputBlock").style.display = "none";
  } else {
    if (discount == "under18"){
      document.getElementById("discountApplied").innerHTML = "Sconto Minorenne";
      document.getElementById("finalPrice").innerHTML = underPrice.toFixed(2) + " €" ;
      document.getElementById("outputText").style.display = "block";
      document.getElementById("outputBlock").style.display = "block";
    } else if (discount == "over65"){
      document.getElementById("discountApplied").innerHTML = " Sconto Over 65";
      document.getElementById("finalPrice").innerHTML = overPrice.toFixed(2) + " €" ;
      document.getElementById("outputText").style.display = "block";
      document.getElementById("outputBlock").style.display = "block";
    } else {
      document.getElementById("discountApplied").innerHTML = " Senza Sconto";
      document.getElementById("finalPrice").innerHTML = fullPrice.toFixed(2) + " €" ;
      document.getElementById("outputText").style.display = "block";
      document.getElementById("outputBlock").style.display = "block";
    }
  }






 });
