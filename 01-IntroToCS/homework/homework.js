'use strict'

function BinarioADecimal(num) {
  var sum = 0
  var numReverse = num.split('').reverse().join('')


  for (var i = 0; i < numReverse.length; i++) {
    sum = sum + numReverse[i] * 2 ** i;
  }
  return sum;
}



function DecimalABinario(num) {
  return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}