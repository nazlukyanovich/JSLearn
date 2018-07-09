(function(){
  console.log("Привет мир");
}());

(function (n){
   
  var result = 1;
  for(var i=1; i<=n; i++)
      result *=i;
  console.log("Факториал числа " + n + " равен " + result);
}(4));