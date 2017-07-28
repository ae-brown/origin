(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('orders').addEventListener('submit', estimateTotal);

});

function estimateTotal(event) {
event.preventDefault();

var itemsJersey = parseInt(document.getElementById('jersey').value, 10) || 0,
    itemsPants = parseInt(document.getElementById('pants').value, 10) || 0,
    itemsSneaker = parseInt(document.getElementById('sneaker').value, 10) || 0,
    tax = 1.0825;

var totalItems = itemsJersey + itemsSneaker + itemsPants,

    totalPrice =  (itemsPants * 35) + (itemsSneaker * 75) + (itemsJersey * 25),

    estimate = '$' + (totalPrice * tax).toFixed(2);

    document.getElementById('txt-estimate').value = estimate; 

    
    //invoice

    var result = document.getElementById('results');

    result.classList.add("invoice");


    result.innerHTML += ' <h2>Invoice</h2>' ;
    result.innerHTML += ' Number of Sneakers:      ' + itemsSneaker + '<br>';  
    result.innerHTML += '  Total Price:    ' + (itemsSneaker * 75).toFixed(2) + '<br><br>';
    result.innerHTML += ' Number of Jerseys:      ' + itemsJersey + '<br>';
    result.innerHTML += '  Total Price:    '  +  (itemsJersey * 25).toFixed(2) + '<br><br>';
    result.innerHTML += ' Number of Pants:      ' + itemsPants + '<br>';
    result.innerHTML += '  Total Price:    '  +  (itemsPants * 35).toFixed(2);




}






})();




























