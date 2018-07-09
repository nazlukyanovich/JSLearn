let foo = (function(){
  let obj = {greeting:"hello"};
  return {
    display: function(){
      console.log(obj.greeting);
    }
  }
})();
foo.display();