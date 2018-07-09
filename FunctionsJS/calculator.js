let calculator = (function(){
  let data = { number: 0};
   
  return {
      sum: function(n){
          data.number += n;
      },
      subtract: function(n){
          data.number -= n;
      },
      display: function(){
          console.log("Result: ", data.number);
      }
  }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();
calculator.subtract(4);
calculator.display();