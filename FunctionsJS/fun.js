function display(){
  console.log("Доброе утро");
  display = function(){
    console.log("Добрый день");
  }
}
var displayMessage = display
display ();
display();
displayMessage();
displayMessage();