function multiply(n){
  var x = n;
  return function(m){ return x * m;};
}
var fn1 = multiply(5);
var result1 = fn1(6);
console.log(result1);

var fn2= multiply(4);
var result2 = fn2(6);
console.log(result2);