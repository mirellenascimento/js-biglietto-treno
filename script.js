// Fixed values
var KM_PRICE = 0.21;
var DISCOUNT_UNDER = 0.20;
var DISCOUNT_OVER = 0.40;
var MAX_SEAT = 10000;
var MIN_SEAT = 1000;
var MAX_COACH = 12;
var MIN_COACH = 1;

// Variables
var carriageNumber = Math.floor(Math.random() * (MAX_COACH - MIN_COACH) + MIN_COACH);
var ticketCode = Math.floor(Math.random() * (MAX_SEAT - MIN_COACH) + MIN_COACH);


// Buttons
var generateButton = document.getElementById("genera");
var cleanButton = document.getElementById("annulla");

// Button GENERA Action
generateButton.addEventListener("click", function(){
  
// imput data
  var name = document.getElementById("nomeECognome").value;
  console.log("input name", name);
  var km = document.getElementById("kmDaPercorrere").value;
  console.log("input km", km);
  var discount = document.getElementById("age").value;
  console.log("input discount", discount);

// prices
  var fullPrice = parseInt(km) * KM_PRICE;
  var underPrice = fullPrice -= fullPrice * DISCOUNT_UNDER;
  var overPrice = fullPrice -= fullPrice * DISCOUNT_OVER;

// ouput data
// General
  document.getElementById("nome").innerHTML = name;
  document.getElementById("carriage").innerHTML = carriageNumber;
  document.getElementById("codice").innerHTML = ticketCode;


// Discount and Prices
  if (isNaN(fullPrice)){
    alert("Non hai inserito i valori!");
    document.getElementById("outputText").style.display = "none";
    document.getElementById("outputBlock").style.display = "none";
  } else {
    document.getElementById("outputText").style.display = "block";
    document.getElementById("outputBlock").style.display = "block";

    if (discount == "under18"){
      document.getElementById("discountApplied").innerHTML = "Sconto Minorenne";
      document.getElementById("finalPrice").innerHTML = underPrice.toFixed(2) + " €" ;
    } else if (discount == "over65"){
      document.getElementById("discountApplied").innerHTML = "Sconto Over 65";
      document.getElementById("finalPrice").innerHTML = overPrice.toFixed(2) + " €" ;
    } else {
      document.getElementById("discountApplied").innerHTML = "Standard";
      document.getElementById("finalPrice").innerHTML = fullPrice.toFixed(2) + " €" ;
    }
  }
});

// Button ANNULLA Action

cleanButton.addEventListener("click", function(){
  document.getElementById("nomeECognome").value = "";
  document.getElementById("kmDaPercorrere").value = "";
  document.getElementById("outputText").style.display = "none";
  document.getElementById("outputBlock").style.display = "none";
});
