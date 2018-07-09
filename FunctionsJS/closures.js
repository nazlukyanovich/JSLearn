function outer (){
  let x = 5;
  function inner (){
    x++;
    console.log(x);
  };
return inner;
}
let fn = outer ();
fn();
fn();
fn();