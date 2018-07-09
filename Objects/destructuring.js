function display({name:userName, age:userAge}){
  console.log(userName, userAge);
}
function sum([a, b, c]){
  var result = a + b + c;
  console.log(result);
}
let user = {name:"Alice", age:33, email: "alice@gmail.com"};


let numbers = [3, 5, 7, 8];

display(user);
sum(numbers);